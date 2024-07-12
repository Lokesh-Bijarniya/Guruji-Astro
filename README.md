# Multi-Step Form Project

## Project Overview
This project implements a multi-step form using React. It leverages React Router for navigation between steps and Material-UI for the stepper component. The form data is validated at each step and persisted in local storage.

## Project Structure
MY-REACT-APP/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ ├── Form1.jsx
│ │ ├── Form2.jsx
│ │ ├── Form3.jsx
│ │ └── Stepper.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ └── testapi.js
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js



## Setup Instructions

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Lokesh-Bijarniya/Guruji-Astro.git

2. **Navigate to the Project Directory:**
   ```sh
   cd Guruji-Astro

3. **Create a Branch with Your Name:**
   ```sh
   git checkout -b <your-name>

4. **Install Dependencies:**
   ```sh
   npm install

5. **Run the Development Server:**
   ```sh
   npm run dev


# Project Details
## Components
+ **Form1.jsx:** Collects personal information (name, email, phone) and performs validation.

+ **Form2.jsx:** Collects address information (address line 1, address line 2, city, state, zip) and performs validation.

+ **Form3.jsx:** Displays the collected information for confirmation and submits the data.

+ **Stepper.jsx:** Displays the stepper navigation using Material-UI.
## Styles
+ **App.css:** Contains the styles for the application.

+ **index.css:** Global styles.

+ **tailwind.config.js:** Configuration for Tailwind CSS.
## Utilities
+ **testapi.js:** Contains a mock API call function to simulate form submission.
## Configuration
+ **vite.config.js:** Configuration file for Vite.

+ **postcss.config.js:** Configuration file for PostCSS.

+ **.eslintrc.cjs:** ESLint configuration file for code linting.


## Assumptions and Decisions
### Assumptions
+ The form requires multi-step data collection with validation at each step.
+ Form data needs to be persisted in local storage.
+ Navigation between form steps is handled by React Router.
### Decisions
+ **React Router:** Used for handling navigation between form steps.
+ **Material-UI:** Used for the stepper component.
+ **React Toastify:** Used for displaying validation errors and form submission success/error messages.
+ **Local Storage:** Used to persist form data across page reloads.

## Additional Notes
+ Ensure Node.js and npm are installed to run the project.
+ Tailwind CSS is used for styling the application.
+ Customize the validation and error handling as per your requirements.# Guruji-Astro
# Guruji-Astro
