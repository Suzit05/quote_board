--------------------------------------------------------------------------------------------------------
🚀 DevOps Quote Board (Dockerized Node.js App)

A simple yet cool Node.js + Express web application with a modern UI that displays random DevOps quotes.
The project is fully containerized using Docker, making it easy to build, run, and deploy anywhere.

--------------------------------------------------------------------------------------------------------
🖼️ Project Preview

Gradient background, clean UI card, and a button to fetch random DevOps quotes.
-------------------------------
🛠️ Tech Stack

Node.js

Express.js

HTML, CSS, JavaScript

Docker
-------------------------------------
📂 Project Structure
project-1-devops-quotes/
├── Dockerfile
├── .dockerignore
├── package.json
├── index.js
└── public/
    ├── index.html
    ├── style.css
    └── script.js
-------------------------------------------
✨ Features

Clean and modern UI

Random DevOps quotes API

Static frontend served by Express

Fully Dockerized application

Beginner-friendly and DevOps-ready
---------------------------------------------------
⚙️ Run the App Locally (Without Docker)
1️⃣ Install dependencies
npm install

2️⃣ Start the server
node index.js

3️⃣ Open in browser
http://localhost:3000
-----------------------------------------
🐳 Run the App Using Docker
1️⃣ Build the Docker image
docker build -t devops-quotes .

2️⃣ Run the container
docker run -p 3000:3000 devops-quotes

3️⃣ Access the app
http://localhost:3000
------------------------------------------
🧠 Key Docker Concepts Used

Dockerfile

Base image (node:18-alpine)

Working directory

Layer caching

Port mapping

.dockerignore
---------------------------------------------
🎯 DevOps Learning Outcome

This project helps you understand:

How applications are packaged using Docker

How developers and DevOps engineers collaborate

How containerization ensures consistency across environments
--------------------------------------------------
🗣️ Interview Talking Point

“I built and Dockerized a Node.js application with a UI, exposed APIs, and pushed the image to Docker Hub.”
