
# Getting Started

# clone the repository in code editor i.e. VsCode

## Step 1: Start the Metro Server

# using npm
npm start

# OR using Yarn
yarn start

## Step 2: Start your Application

### For Android

# using npm
npm run android

# OR using Yarn
yarn android

### For iOS

# using npm
npm run ios

# OR using Yarn
yarn ios


This project utilizes the following third-party libraries:

### 1. React Navigation
   **Description**: A popular library for navigation in React Native. It provides various type of navigations.
   **Libraries Used**:
     - `@react-navigation/bottom-tabs`: Bottom tab navigation.
     - `@react-navigation/stack`: Stack navigation for handling screen transitions.
   **Installation**: 
     npm install @react-navigation/native
     npm install @react-navigation/stack
     npm install @react-navigation/bottom-tabs
     npm install react-native-screens react-native-safe-area-context

### 2. Redux Toolkit
   **Description**: A state management library that simplifies Redux usage. It provides tools to manage state more efficiently with reduced boilerplate.
   **Installation**:
     npm install @reduxjs/toolkit react-redux

### 3. Lottie React Native
   **Description**: A library for rendering Lottie animations in React Native. Used for displaying animated JSON files.
   **Installation**:
     npm install lottie-react-native

### 4. Async Storage
  **Description**: A library for which allows to store data locally in the device in key-value form and in string format.
  **Installation**:
    npm install @react-native-async-storage/async-storage


# App functionality
 • This app allows to add different tasks with their time duration, start timer when start on particular task  
 • All the tasks visible on the dashboard screen with respect to their category
 • You can see completed tasks in history tab
 • At a time you can start timer for single task(because logically you can do single task at a time)

