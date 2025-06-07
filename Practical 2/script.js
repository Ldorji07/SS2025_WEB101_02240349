// Configuration and Constants
const WEATHER_API_KEY = 'API Key'; // Replace with your API key
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const PLACEHOLDER_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Global state to store saved locations
let savedLocations = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Tab navigation
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });

    // GET Request - Weather data
    document.getElementById('get-weather').addEventListener('click', getWeather);

    // POST Request - Save location
    document.getElementById('save-location').addEventListener('click', saveLocation);

    // Edit Modal Event Listeners
    document.getElementById('update-location').addEventListener('click', updateLocation);
    document.getElementById('cancel-edit').addEventListener('click', () => {
        document.getElementById('edit-modal').style.display = 'none';
    });

    // Load initial saved locations
    fetchSavedLocations();
});

// Utility Functions
function displayResponseInfo(method, url, status, data) {
    const responseInfo = document.getElementById('response-info');
    responseInfo.textContent = `Method: ${method}
    URL: ${url}
    Status: ${status}
    Timestamp: ${new Date().toLocaleString()}
    
    Data: ${JSON.stringify(data, null, 2)}`;
}

// GET Request Implementation
async function getWeather() {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = 'Loading...';

    try {
        // Constructing the URL with query parameters
        const url = `${WEATHER_API_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${WEATHER_API_KEY}`;

        // Fetch API for GET request
        const response = await fetch(url);
        const data = await response.json();

        // Display response info
        displayResponseInfo('GET', url.replace(WEATHER_API_KEY, 'API_KEY_HIDDEN'), response.status, data);

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch weather data');
        }

        // Display weather data
        weatherResult.innerHTML = `
            <div class="weather-card">
                <h3>${data.name}, ${data.sys.country}</h3>
                <div>
                    <strong>Weather:</strong> ${data.weather[0].main} - ${data.weather[0].description}
                </div>
                <div>
                    <strong>Temperature:</strong> ${data.main.temp}°C (Feels like: ${data.main.feels_like}°C)
                </div>
                <div>
                    <strong>Humidity:</strong> ${data.main.humidity}%
                </div>
                <div>
                    <strong>Wind:</strong> ${data.wind.speed} m/s
                </div>
            </div>
            <button id="quick-save" style="background-color: #72ade8">Save This Location</button>
        `;

        // Add quick save functionality
        document.getElementById('quick-save').addEventListener('click', () => {
            document.getElementById('location-name').value = data.name;
            document.getElementById('location-city').value = data.name;
            document.getElementById('location-country').value = data.sys.country;
            document.getElementById('location-notes').value = `Temp: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;

            // Switch to the POST tab
            document.querySelector('[data-tab="post"]').click();
        });

    } catch (error) {
        weatherResult.innerHTML = `<div class="weather-card" style="border-left-color: #e74c3c">
            <h3>Error</h3>
            <p>${error.message}</p>
        </div>`;
    }
}

// POST Request Implementation
async function saveLocation() {
    const name = document.getElementById('location-name').value.trim();
    const city = document.getElementById('location-city').value.trim();
    const country = document.getElementById('location-country').value.trim();
    const notes = document.getElementById('location-notes').value.trim();

    if (!name || !city) {
        alert('Please enter at least a name and city');
        return;
    }

    try {
        // Create the location object
        const locationData = {
            title: name,
            body: JSON.stringify({
                city,
                country,
                notes
            }),
            userId: 1 // This is just for JSONPlaceholder API
        };

        // Fetch API for POST request
        const response = await fetch(PLACEHOLDER_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(locationData)
        });

        const data = await response.json();

        // Display response info
        displayResponseInfo('POST', PLACEHOLDER_API_URL, response.status, data);

        if (!response.ok) {
            throw new Error('Failed to save location');
        }

        // Add to local saved locations (with the ID from the response)
        const savedLocation = {
            id: data.id,
            name,
            city,
            country,
            notes
        };

        savedLocations.push(savedLocation);
        renderSavedLocations();
        
        // Clear form        
        document.getElementById('location-name').value = '';
        document.getElementById('location-city').value = '';
        document.getElementById('location-country').value = '';
        document.getElementById('location-notes').value = '';

        // Switch to saved locations tab
        document.querySelector('.tab[data-tab="saved"]').click();

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }

// Fetch and display saved locations (simulated for JSONPlaceholder)
async function fetchSavedLocations() {
    try {
        // This is a GET request to JSONPlaceholder
        const response = await fetch(`${PLACEHOLDER_API_URL}?userId=1`);
        const data = await response.json();

        // Transform the data to our format - only take first 5 items
        savedLocations = data.slice(0, 5).map(item => {
            let city = '', country = '', notes = '';

            // Try to parse the body if it's a valid JSON
            try {
                const body = JSON.parse(item.body);
                city = body.city || 'Unknown City';
                country = body.country || '';
                notes = body.notes || '';
            } catch (e) {
                // If not valid JSON, use raw body
                city = 'Unknown City';
                notes = item.body;
            }

            return {
                id: item.id,
                name: item.title,
                city,
                country,
                notes
            };
        });

        // Render the locations
        renderSavedLocations();
    } catch (error) {
        console.error("Error fetching saved locations:", error);
    }
}

// Render saved locations list
function renderSavedLocations() {
    const container = document.getElementById('saved-locations');

    if (savedLocations.length === 0) {
        container.innerHTML = '<p>No saved locations. Add one in the "POST Location" tab.</p>';
        return;
    }
    
    
