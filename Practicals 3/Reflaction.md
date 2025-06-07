### Documentation
This project focused on implementing a modern file upload form using React and Next.js. The main concepts I applied include:

Client-side form handling using react-hook-form

Drag-and-drop interface with react-dropzone

Progress bar tracking using Axios with onUploadProgress

Backend form parsing using formidable in the API route

These concepts allowed me to build a full-stack file upload feature that’s intuitive for users and easy to validate and manage on the backend.

### Reflection
💡 What I Learned
I learned how to properly handle multipart/form-data in Next.js API routes using Formidable.

It was my first time integrating drag-and-drop file upload. react-dropzone made this easy once I understood how to manage dropped files with state.

I also understood how to use Axios's onUploadProgress to build a live upload progress bar – something I had only seen in theory before.

### Challenges I Faced
1. Backend not receiving file data

Initially, I struggled because the Next.js API routes don’t parse multipart/form-data by default. The request body was coming in as undefined. After researching, I realized I had to disable the default body parser and use formidable to manually parse the form.


2. Drag and Drop UX bugs

Another issue was getting the drag-and-drop interface to work seamlessly with form validation. Sometimes, files dropped wouldn’t register properly. The fix was to explicitly set the file value using setValue() from react-hook-form whenever a file was dropped.


### Final Thoughts
This practical taught me how file uploads work from both frontend and backend perspectives. I now feel more confident working with custom file upload logic and handling real-world user interactions like drag-and-drop and upload feedback.

It was one of the more technical tasks, but the satisfaction of seeing the file upload and progress bar work smoothly was worth the effort.

