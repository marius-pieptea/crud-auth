# Angular-NgRx-SpringBoot-PostgreSQL CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application built using Angular, NgRx, Java Spring Boot Security, and PostgreSQL.

## Technologies Used

- Frontend: Angular with NgRx for state management
- Backend: Java Spring Boot with Spring Security, JWT, Redis, Log4j2, H2, Lombok, Swagger, JUnit
- Database: PostgreSQL

## Features

- User authentication and authorization using Spring Security
- CRUD operations on various entities
- Reactive state management using NgRx

## Getting Started

### Prerequisites

- Node.js and npm
- Java 17 or higher
- PostgreSQL

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/marius-pieptea/crud-auth/

Install NPM packages
cd crud-auth/frontend
npm install

Setup Java Spring Boot application
cd ../backend
mvn install

Setup PostgreSQL database
Create a new PostgreSQL database and update the application.properties file with your database name, username, and password.
Running the Application
Start the backend server
cd backend
mvn spring-boot:run

Start the frontend server
cd ../frontend
npm start
Open http://localhost:4200 to view it in the browser.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT
