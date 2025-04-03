# Blog_Site

Blog_Site is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) with EJS for templating. This project provides a platform for users to create, edit, and manage blog posts. It includes user authentication, CRUD operations for posts, and a responsive design.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Overview

Blog_Site is designed to offer a seamless blogging experience with a focus on performance, security, and usability. It allows users to register, log in, create, update, delete, and view blog posts.

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **Responsive Design**: Ensures compatibility across different devices.
- **EJS Templating**: Used for server-side rendering of HTML.
- **Rich Text Editor**: Enables users to format their blog posts.
- **SEO Optimization**: Basic SEO features to improve visibility.

## Technologies Used

- **Frontend**:
  - JavaScript
  - EJS (Embedded JavaScript)
  - CSS

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Yanendrajha/Blog_Site.git
   cd Blog_Site
   ```

2. Install backend dependencies:
   ```sh
   npm install
   ```

3. Setup environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Create, edit, and delete blog posts using the provided interface.

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

### Posts

- **GET /api/posts**: Get all posts.
- **GET /api/posts/:id**: Get a single post by ID.
- **POST /api/posts**: Create a new post.
- **PUT /api/posts/:id**: Update a post by ID.
- **DELETE /api/posts/:id**: Delete a post by ID.

## Project Structure

```
Blog_Site/
├── models/                # Mongoose models
│   ├── User.js
│   └── Post.js
├── routes/                # Express routes
│   ├── auth.js
│   └── posts.js
├── views/                 # EJS templates
│   ├── partials/
│   ├── auth/
│   └── posts/
├── public/                # Static files (CSS, JavaScript, images)
├── .env                   # Environment variables
├── app.js                 # Main application file
├── package.json           # NPM dependencies and scripts
└── README.md              # Project documentation
```
