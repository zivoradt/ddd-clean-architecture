
# DDD and Clean architecture
This project is a practice exercise for developing a dinner reservation application with Domain-Driven Design (DDD) and Clean Architecture. The goal is to create a scalable and maintainable software architecture while focusing on modeling business domains, encapsulating logic, and maintaining modularity. The application enables searching and booking dinner reservations at restaurants, emphasizing separation of concerns and clear boundaries between application layers. Through this project, we aim to enhance our understanding of DDD and Clean Architecture concepts in practical implementation.

# Table of Contents
• Introduction
• Technologies
• Installation
• Usage
• Docker Compose
• Contributing
• License
• Introduction


# Technologies
List the technologies used in the project, such as:

• Node.js
• Express.js
• PostgreSQL
• Docker
• TypeScript
• Nodemon
• Bunyan
• Installation

# Clone the repository:

git clone https://github.com/your-username/repository-name.git

# Install the dependencies:

npm install

# Usage
To start the application, use the following scripts defined in the package.json file:

start: Runs the application in production mode with Nodemon and logs with Bunyan.
dev: Runs the application in development mode with Nodemon, TypeScript paths registration, and logs with Bunyan.
build: Compiles the TypeScript source code to JavaScript using the tsconfig.json configuration file and generates the aliases using tsc-alias.

To start the application in production mode, run:
npm start

To start the application in development mode, run:
npm run dev

To build the application, run:
npm run build

# Docker Compose
The project includes a docker-compose.yml file to easily set up the required services:

PostgreSQL database (db): The PostgreSQL container with a volume for persistent data storage.
Adminer (adminer): A web-based database management tool for PostgreSQL.

To start the services using Docker Compose, make sure you have Docker and Docker Compose installed. Then run the following command:
docker-compose up
This will start the PostgreSQL database and Adminer containers. PostgreSQL will be accessible at localhost:5432, and Adminer will be accessible at localhost:8080.

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or a pull request.

# License
License Name (e.g., MIT License)
