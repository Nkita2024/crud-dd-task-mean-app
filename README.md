In this DevOps task, you need to build and deploy a full-stack CRUD application using the MEAN stack (MongoDB, Express, Angular 15, and Node.js). The backend will be developed with Node.js and Express to provide REST APIs, connecting to a MongoDB database. The frontend will be an Angular application utilizing HTTPClient for communication.  

The application will manage a collection of tutorials, where each tutorial includes an ID, title, description, and published status. Users will be able to create, retrieve, update, and delete tutorials. Additionally, a search box will allow users to find tutorials by title.

## Project setup

### Node.js Server

cd backend

npm install

You can update the MongoDB credentials by modifying the `db.config.js` file located in `app/config/`.

Run `node server.js`

### Angular Client

cd frontend

npm install

Run `ng serve --port 8081`

You can modify the `src/app/services/tutorial.service.ts` file to adjust how the frontend interacts with the backend.

Navigate to `http://localhost:8081/`


# CRUD Task MEAN App (Docker + CI/CD)

This repository contains a full-stack CRUD application built with **MongoDB, Express, Angular, and Node.js**, containerized with Docker, orchestrated via Docker Compose, and fronted by Nginx. It includes CI/CD automation for reproducible builds and deployments.

---

## Features
- **Frontend**: Angular SPA served via Nginx
- **Backend**: Node.js + Express REST API
- **Database**: MongoDB with auto-seeded sample data
- **Reverse Proxy**: Nginx routing `/` → frontend, `/api/` → backend
- **CI/CD**: GitHub Actions pipeline for build, push, and deploy

---

## Setup Instructions

###  Clone the repository
```bash
git clone https://github.com/Nkita2024/crud-dd-task-mean-app.git
cd crud-dd-task-mean-app

---

## Build and run with Docker Compose

docker compose up -d

##  Access the application

- Frontend UI → http://localhost/
- Backend API → http://localhost/api/tutorial

##⚙️CI/CD Pipeline

The repository includes a GitHub Actions workflow (.github/workflows/docker-ci.yml) that:
- Builds Docker images for frontend and backend
- Pushes them to Docker Hub
- Deploys via Docker Compose
You can view pipeline runs under the Actions tab in GitHub.



