# Restaurant Project

Welcome to the Restaurant Project! This project is designed to showcase a restaurant website with a React frontend, Express backend, and MongoDB database.

## Installation

To install and run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB (Community Edition or Atlas)

### Backend Setup

1. Clone this repository to your local machine.
2. Navigate to the backend directory in your terminal.
3. Install the backend dependencies by running:

   bash
   npm install
   

4. Create a .env file in the backend directory with the following content:

   env
   PORT=3001
   MONGODB_URI=<your_mongodb_connection_string>
   

   Replace <your_mongodb_connection_string> with your actual MongoDB connection string.

5. Start the backend server by running:

   bash
   npm start
   

   This will start the Express server at http://localhost:3001.

### Frontend Setup

1. Navigate to the frontend directory in your terminal.
2. Install the frontend dependencies by running:

   bash
   npm install
   

3. Create a .env file in the frontend directory with the following content:

   env
   REACT_APP_API_URL=http://localhost:3001/api
   

4. Start the frontend development server by running:

   bash
   npm start
   

   This will start the React development server at http://localhost:3000.

### Accessing the Application

Once both the backend and frontend are running, you can access the application by opening http://localhost:3000 in your web browser.

## Usage

Feel free to explore the restaurant website and its features. You can customize the content, design, and functionality to fit your needs.

## Contributing

If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
