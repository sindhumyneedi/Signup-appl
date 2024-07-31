Task Overview
Create a small web application with three pages using React:

Sign Up Page
Log In Page
Dashboard Page
Core Requirements
Framework: Use React for building the application.
Responsiveness: Ensure the design is responsive for both desktop and mobile devices.
Form Validations: Add validations to form fields to ensure valid data before submission.
Detailed Steps
1. Sign Up Page
API URL for Registration: https://syoft.dev/Api/user_registeration/api/user_registeration

Data Collection:

Collect from the user:
user_firstname
user_email
user_password
user_phone
Use static data for:
user_lastname (e.g., "Doe")
user_city (e.g., "Hyderabad")
user_zipcode (e.g., "500072")
Sample Payload:

{
    "user_firstname": "John",
    "user_email": "john@example.com",
    "user_phone": "1234567890",
    "user_password": "password123",
    "user_lastname": "Doe",
    "user_city": "Hyderabad",
    "user_zipcode": "500072"
}

Objective: When the form is submitted, send this data in JSON format to the provided API URL.

2. Log In Page
API URL for Login: https://syoft.dev/Api/userlogin/api/userlogin

Data Collection:

Collect from the user:
user_email
user_password
Sample Payload:

{
    "user_email": "john@example.com",
    "user_password": "password123"
}

Objective: On form submission, send the data in JSON format to the API URL. If login is successful, store the user's information in local storage and redirect to the Dashboard page.

3. Dashboard Page
Display User Information: Show the user's information stored in local storage from the login process.
Creativity: Design a user-friendly dashboard that displays user information. Include elements like user profile, greeting messages, and any additional data or features you want to add.
Additional Notes
API Interaction: Both APIs are POST requests, sending the collected form data as JSON objects.
Design: Ensure your design is responsive for different devices and screen sizes.
Form Validations: Validate that all required fields are filled out and ensure entries are in the correct format (e.g., email).
Suggested Workflow
Set Up Your React Environment: Use Create React App to set up your React project.
Create Components:
Sign Up Form Component
Log In Form Component
Dashboard Page Component
Implement Form Validation: Use React Components for form validations.
Handle API Requests: Use fetch API for POST requests to the given API URLs.
Store and Retrieve User Data: Use local storage to save user data upon successful login and retrieve it for display on the Dashboard page.
Design Responsively: Use CSS or its frameworks like Bootstrap to ensure your application is visually appealing and responsive.
