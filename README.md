<div align="center">
  

<h3 align="center">UWO Purity Test</h3>

  <p align="center">
    A web app to gauge your "Mustang" level at the University of Western Ontario.
    <br />
     <a href="https://uwopuritytest.com">uwopuritytest.com</a>
  </p>
</div>



## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-tests">Running the Tests</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

The UWO Purity Test is a web application designed to allow students of the University of Western Ontario to reflect on and compare their experiences. It presents a series of questions about common UWO activities and calculates a "purity score" based on the number of activities a user has participated in.

### Key Features

- **Interactive Questionnaire:** A list of questions related to UWO student life.
- **Purity Score Calculation:** Calculates a score based on the number of checked items.
- **Results Page:** Displays the calculated score and a corresponding message.
- **Sharing Functionality:** Allows users to share their results via the Web Share API.
- **Google Analytics Integration:** Tracks user interactions using Google Analytics 4.

## Architecture

![Architecture Diagram](https://github.com/shaun-ahuja/uwo-purity-test/blob/main/public/purityArchitecture.png)

The project is built using React and leverages the following technologies:

- **React:** A JavaScript library for building user interfaces.
- **React Router DOM:** For handling navigation between different pages (test and results).
- **React GA4:** For integrating Google Analytics 4 to track user behavior.
- **Vercel Analytics:** Integrated for website analytics.
- **Create React App:** Used as the base for project setup and development.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

Instructions for setting up the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/shaun-ahuja/uwo-purity-test.git
   ```
2. Navigate to the project directory:
   ```sh
   cd uwo-purity-test
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
   This will start the app in development mode, and you can view it in your browser at `http://localhost:3000`.

### Running the Tests

To run the test suite:

```sh
npm test
```

This will launch the test runner in interactive watch mode.
```