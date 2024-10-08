Here’s the updated `README.md` file with the `package.json` details included:

---

# Cleaning and Maintenance Company API

This project is a RESTful API built with Node.js and Express.js, designed to manage clients, services, and orders for a cleaning and maintenance company. The API allows you to register clients and services, and to create, update, list, and delete orders.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Clients](#clients)
  - [Services](#services)
  - [Orders](#orders)
- [Usage](#usage)
- [Package.json](#packagejson)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Environment Variables

This project uses environment variables to manage configuration settings. You need to create a `.env` file in the root of your project with the following variables:

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

Replace `your-database-name` with the name of your MongoDB database.

## API Endpoints

### Clients

- **GET /clients**: List all clients.
- **GET /clients/:id**: Get a client by ID.
- **POST /clients**: Register a new client.
- **PUT /clients/:id**: Update an existing client by ID.
- **DELETE /clients/:id**: Delete a client by ID.

### Services

- **GET /services**: List all services.
- **GET /services/:id**: Get a service by ID.
- **POST /services**: Register a new service.
- **PUT /services/:id**: Update an existing service by ID.
- **DELETE /services/:id**: Delete a service by ID.

### Orders

- **GET /orders**: List all orders.
- **GET /orders/:id**: Get an order by ID.
- **POST /orders**: Register a new order.
- **PUT /orders/:id**: Update an existing order by ID.
- **DELETE /orders/:id**: Delete an order by ID.

## Usage

1. Start the server:
    ```bash
    npm start
    ```
    The server will run on the port specified in your `.env` file (default is `3000`).

2. Use a tool like Postman or Insomnia to interact with the API at `http://localhost:3000`.

## Package.json

Below is the `package.json` configuration for this project:

```json
{
  "name": "project-assessment-4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chalk": "^5.3.0",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongodb": "^6.8.0",
    "mongoose": "^8.5.3"
  }
}
```

### Key Points:

- **Scripts:**
  - `dev`: Runs the server using `nodemon` for automatic restarts on file changes.
  - `test`: Placeholder script for running tests (currently not implemented).
  
- **Dependencies:**
  - `chalk`: For terminal string styling.
  - `dotenv`: For environment variable management.
  - `express`: The web framework for building the API.
  - `mongodb`: MongoDB driver for Node.js.
  - `mongoose`: ODM for MongoDB.

## Contributing

If you want to contribute to this project, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.
