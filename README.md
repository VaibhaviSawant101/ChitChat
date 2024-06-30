# ChitChat Project

ChitChat is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for WebSocket communication.

## Features

- Real-time messaging with multiple users
- User authentication with JWT tokens
- MongoDB database for storing chat messages and user data
- Responsive UI design using React.js
- WebSocket integration for instant message delivery

## Technologies Used

- **Frontend**: React.js, Socket.io-client
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/VaibhaviSawant101/ChitChat.git
   cd chitchat

2. **Install dependencies for backend**

   ```bash
   cd backend
   npm install

3. **Install dependencies for frontend**

   ```bash
   cd frontend
   npm install

4. **Set up environment variables**
    - Create a .env file in the server directory.
    - Add the following variables
    ```plaintext
    JWT_SECRET=<your-jwt-secret>

5. **Run the application**
    ```bash
    # Run backend
    cd backend
    nodemon run dev
    
    # Run frontend
    cd frontend
    npm start

6. **Access the application**
Open your browser and navigate to http://localhost:5555 to use ChitChat.

## Folder Structure
```bash
ChitChat/    
├── backend/   
│   ├── Controllers/  
│   │   ├── ChatController.js  
│   │   └── MessageController.js  
│   ├── Models/  
│   │   ├── ChatModel.js  
│   │   └── MessageModel.js 
│   ├── Middlewares/ 
│   ├── Routes/  
│   │   ├── ChatRoute.js  
│   │   └── MessageRoute.js    
│   ├── .env  
│   ├── server.js  
│   └── package.json  
├── frontend/  
│   ├── public/  
│   ├── src/  
│   │   ├── components/  
│   │   ├── pages/  
│   │   ├── App.js  
│   │   └── ...  
│   ├── package.json  
│   └── ...
├── .gitignore
└── README.md

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for a new features or bug fixes.