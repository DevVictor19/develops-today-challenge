# Fullstack Application

A fullstack application built with **NestJS** for the backend and **Next.js** for the frontend for searching country details. This guide provides step-by-step instructions to set up and run both the server and the frontend locally.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend (NestJS)](#backend-nestjs)
  - [Frontend (Next.js)](#frontend-nextjs)
- [Configuration](#configuration)
  - [.env.local for Frontend](#envlocal-for-frontend)
- [Running the Application](#running-the-application)
  - [Starting the Backend Server](#starting-the-backend-server)
  - [Starting the Frontend](#starting-the-frontend)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/DevVictor19/develops-today-challenge.git
cd develops-today-challenge
```

### 2. Setup Backend (NestJS)

Navigate to the backend directory and install dependencies.

```bash
cd backend
npm install
```

### 3. Setup Frontend (Next.js)

Open a new terminal window/tab, navigate to the frontend directory, and install dependencies.

```bash
cd frontend
npm install
```

## Configuration

### .env.local for Frontend

The frontend requires environment variables to communicate with the backend API. Create a `.env.local` file in the frontend directory with the following content:

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Create the `.env.local` file:

   ```bash
   touch .env.local
   ```

3. Open `.env.local` in your preferred text editor and add the following line:

   ```env
   API_URL=http://localhost:8080
   ```

   This sets the `API_URL` to point to the locally running backend server.

## Running the Application

### Starting the Backend Server

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Start the NestJS server on port **8080**:

   ```bash
   npm run start
   ```

   The server should now be running at [http://localhost:8080](http://localhost:8080).

### Starting the Frontend

1. Open a new terminal window/tab.

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Start the Next.js development server on port **3000**:

   ```bash
   npm run dev
   ```

   The frontend should now be accessible at [http://localhost:3000](http://localhost:3000).

- **backend/**: Contains the NestJS backend server.
- **frontend/**: Contains the Next.js frontend application.
- **postman-doc/** Contains the postman collection for testing the api.
- **README.md**: This documentation file.
