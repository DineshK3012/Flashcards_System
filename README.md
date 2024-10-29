# Flashcard Management System

A full-featured Flashcard Management System that enables users to create, edit, and study flashcards, with an administrative role for managing flashcard content. This project supports user authentication and role-based access, making it suitable for both individual users and administrators.

## Live Demo

Check out the live application here: [Flashcard Management System](https://flashcards-system.vercel.app)

## Test Login Credentials

### Admin Role
- **Email**: root@gmail.com
- **Password**: admin

### Normal User
- **Email**: normaluser@gmail.com
- **Password**: user

## Features

- **User Authentication**: Secure login and registration with role-based access (admin and normal user).
- **Flashcard Management**: Create, edit, and delete flashcards as an admin.
- **Flashcard Study Mode**: Flip through flashcards for learning and review.
- **Role-Based Access Control**: Admins can manage all flashcards, while normal users can only view flashcards.
- **Responsive Design**: User-friendly and mobile-optimized interface.

## Technologies Used

### Frontend

- **React**: Component-based JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive and efficient styling.
- **Recoil**: State management for handling global state like user authentication and flashcard data.
- **Axios**: For making API requests to the backend.
- **React Router**: Enables routing and navigation between pages.
- **React Toastify**: For displaying success and error notifications to users.

### Backend

- **Node.js & Express**: Server-side JavaScript runtime and framework for handling API requests and authentication.
- **MySQL**: Relational database for storing user information, flashcards, and roles.
- **JWT (JSON Web Token)**: Secure authentication for user login and session management.
- **bcrypt.js**: For hashing and securing user passwords before storing them in the database.

### Hosting

- **Frontend**: Deployed on [Vercel](https://vercel.com/).
- **Backend**: Hosted on Render.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **MySQL**: Set up a MySQL database for storing user and flashcard information.

### Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/flashcard-management-system.git
    ```

2. Navigate to the project folder:

    ```bash
    cd flashcard-management-system
    ```

3. Install dependencies for the frontend:

    ```bash
    cd Frontend
    npm install
    ```

4. Install dependencies for the backend:

    ```bash
    cd Backend
    npm install
    ```

### Running the App

#### Frontend

1. Start the frontend:

    ```bash
    cd Frontend
    npm run dev
    ```
2. Create a `.env` file in the Frontend directory and add your environment variable (see example.env file) 
    ```makefile
    VITE_BASE_URL=http://localhost:3000
    ```

   The frontend will be running on [http://localhost:5173
   ](http://localhost:5173).

#### Backend

1. Create a `config.env` file in the Backend/config directory and add your environment variables (see example.config.env):

    ```makefile
    MYSQL_URI=your-mysql-connection-string
    JWT_SECRET=your-jwt-secret
    ```

2. Run the backend:

    ```bash
    cd backend
    npm run dev
    ```

   The backend will be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

- **POST /register**: Register a new user.
- **POST /login**: Login a user.
- **GET /api/users/logout**: Login a user.
- **GET /api/users/me**: Get the user details.
- **POST /flashcards**: Create a new flashcard (Admin only).
- **GET /flashcards**: Retrieve all flashcards.
- **PUT /flashcards/:id**: Update an existing flashcard (Admin only).
- **DELETE /flashcards/:id**: Delete a flashcard (Admin only).
