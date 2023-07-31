# MERN-Auth

Secure and user-friendly MERN stack web app with JWT authentication. Features include registration, login, profile management, and protected routes, ensuring data security and a seamless user experience.

## Project Support Features

- #### User Registration and Authentication:

  This web app provides a seamless user registration process. Users can sign up with their email and create a secure password. JWT authentication ensures their account remains protected.

- #### User Login and Logout:

  Returning users can easily log in to their accounts using their credentials. Additionally, the application supports secure logout to ensure user privacy.

- #### Privacy and Security:
  User data and login credentials are stored securely, adhering to industry best practices, and ensuring user privacy.

## Installation

Install MERN-Auth

- Clone this repository [here](https://github.com/soham-basak/MERN-STACK-GOALS-APP.git).

- Run npm install to install all dependencies

```bash
  cd MERN-Auth
  npm install
  cd frontend
  npm install
```

- First configure your Mongodb URL in the .env file. You can use your locally installed MongoDB. Do configure to your choice in the application .env file.

- Run npm run dev

```bash
   cd MERN-Auth
   npm run dev
```

## REST API Reference

### API Endpoints

| HTTP Verbs | Endpoints          | Action                            |
| ---------- | ------------------ | --------------------------------- |
| POST       | /api/users/        | To create a new user account      |
| POST       | /api/users/auth    | To login an existing user account |
| GET        | /api/users/profile | To get an existing user profile   |
| PUT        | /api/users/profile | To update user profile            |
| POST       | /api/goals/logout  | To logout user                    |

## Tech Stack

- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.

- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.

- [ReactJs](https://legacy.reactjs.org/) The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently.

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
