### a/ Documentation
The main concepts I implemented in this project were:

RESTful API integration: I used both real and mock APIs to demonstrate GET, POST, PUT, and DELETE operations.

JavaScript DOM manipulation: To dynamically update the UI based on user input and API responses.

JSON handling: All API communications were done in JSON format, requiring parsing and stringifying data.

Event-driven programming: Button clicks and form submissions triggered all actions.

### Reflection
💡 What I Learned
Through this project, I gained hands-on experience in:

Working with asynchronous operations using fetch().

Structuring front-end code to handle multiple API endpoints.

Managing user input and showing real-time feedback in the UI.

Debugging JavaScript errors, especially with async/await functions.

### Challenges I Faced
One of the main challenges was handling failed API responses, especially when users entered invalid city names. Initially, the app would crash or show undefined values. I resolved this by adding conditional checks and displaying error messages to the user.

Another issue was editing saved locations. At first, the modal did not populate with the selected location's data. I realized I had to assign the data attributes correctly before triggering the modal.

### Final Thoughts
This project improved both my JavaScript skills and understanding of APIs. I now feel more confident integrating external data sources and handling CRUD operations in a real-world app.
