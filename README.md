Project Overview

MyPortfolio Backend is a Node.js + Express + MongoDB Atlas application forming the backend of a MERN stack portfolio system.
It provides secure REST APIs for managing Contacts, Projects, Qualifications, and Users with authentication and protected routes.

This project was developed as part of COMP229 – Web Application Development Assignment 2.

Tech Stack

Backend: Node.js v22 / Express v4

Database: MongoDB Atlas (Cloud) using Mongoose ODM

Authentication: JSON Web Token (JWT) + bcrypt/crypto

Frontend: React (Vite) (Client folder from Assignment 1)

Testing Tool: Thunder Client / Postman

Project Structure
MyPortfolio/
├── server.js                 # Main server entry point
├── config/
│   └── config.js             # MongoDB & JWT configuration
├── server/
│   ├── express.js            # Express app setup and middleware
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── (other controllers)
│   ├── models/
│   │   ├── user.model.js
│   │   ├── contact.model.js
│   │   ├── project.model.js
│   │   └── qualification.model.js
│   └── routes/
│       ├── auth.routes.js
│       ├── contact.routes.js
│       ├── project.routes.js
│       ├── qualification.routes.js
│       └── user.routes.js
└── client/                   # Frontend React app (Assignment 1)

Installation & Setup
1️. Clone the repository
git clone https://github.com/Jdrodrigo/MyPortfolioBackEnd.git
cd MyPortfolio

2️. Install dependencies
npm install

3️. Configure MongoDB Atlas URI (hard-coded in config.js)

In config/config.js, confirm your connection string:

mongoUri: "mongodb+srv://<username>:<password>@cluster0.vkyxz54.mongodb.net/Portfolio?retryWrites=true&w=majority"


(This repository is private; credentials remain secure.)

4️. Run the development server
cd client
npm run dev


Expected console output:

Server started on port 3000.
Connected to the database!


Access the frontend at http://localhost:5173

API Endpoints (Thunder Client / Postman)
- Contacts
Method	Endpoint	Description
GET	/api/contacts	Retrieve all contacts
POST	/api/contacts	Add a new contact
PUT	/api/contacts/:id	Update a contact
DELETE	/api/contacts/:id	Delete a contact
DELETE	/api/contacts	Delete all contacts
- Projects
Method	Endpoint	Description
GET	/api/projects	List all projects
POST	/api/projects	Add a new project
PUT	/api/projects/:id	Update project
DELETE	/api/projects/:id	Remove project
- Qualifications / Education
Method	Endpoint	Description
GET	/api/qualifications	Retrieve all qualifications
POST	/api/qualifications	Add a qualification
- Users
Method	Endpoint	Description
GET	/api/users	List users
POST	/api/users	Create user
DELETE	/api/users/:id	Remove user
- Authentication (JWT)
Action	Endpoint	Method	Description
Sign In	/auth/signin	POST	Validate email & password, return JWT
Sign Out	/auth/signout	GET	Clear token
Protected Route	/api/protected	GET	Accessible only with valid JWT

After signing in, include this header in Thunder Client:

Authorization: Bearer <token>

Database Models

All collections are created in the Portfolio database:

contacts → firstname, lastname, email

projects → title, firstname, lastname, email, completion, description

qualifications → title, firstname, lastname, email, completion, description

users → name, email, password, created, updated

Submission Checklist

Part II – Database & Models (Contacts, Projects, Qualifications, Users)
Part III – Express Server Configured + REST Endpoints Tested
Part IV – Authentication Implemented (Sign In / Out + JWT Protection)
Part V – MongoDB Atlas Connected and Tested in Thunder Client

Author

Jan Daniel “JD” Baldovino
Centennial College – Software Engineering Technology (AI)
Course: COMP229 – Web Application Development

Notes

.env not used; secrets stored securely in a private GitHub repo.

Database hosted on MongoDB Atlas Cluster0.

All API routes tested using Thunder Client and Postman.

Ready for Submission

Push all commits

Verify repo is Private

Submit the GitHub link:
https://github.com/Jdrodrigo/MyPortfolioBackEnd