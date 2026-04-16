
# Project Title

# 🚀 InterviewIQ – AI-Powered Interview Platform

InterviewIQ is a full-stack AI-driven interview platform designed to simulate real-world hiring processes by automating interview creation, candidate evaluation, and response analysis.

Built with a modern tech stack, the platform enables dynamic interview experiences, real-time feedback, and intelligent candidate assessment using AI.

---

## ⚡ Key Features

- 🤖 **AI-Powered Interview Engine**  
  Dynamically generates interview questions based on resume data and job requirements.

- 📄 **Resume Screening & Analysis**  
  Upload resumes and automatically extract key insights for candidate shortlisting.

- 🧠 **Real-Time Response Evaluation**  
  Analyze candidate answers with structured feedback and performance insights.

- 🎯 **Smart Interview Workflow**  
  End-to-end pipeline from interview creation → candidate interaction → evaluation.

- 📊 **Analytics Dashboard**  
  Visualize candidate performance with charts and actionable metrics.

- ⚡ **Scalable Architecture**  
  Designed to handle real-time interactions and asynchronous workflows efficiently.


---

## 🏗️ Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- REST APIs
- JWT Authentication
- AI/LLM Integration

---

## 🧠 System Design Highlights

- Modular backend architecture for scalability  
- Real-time data handling for interview sessions  
- Asynchronous processing for AI evaluation  
- Optimized API design for low latency  

---
  




## ⚙️ Installation & Setup Guide

Follow these steps to set up and run the project locally.

---

## 🧾 Prerequisites

Make sure you have the following installed:

- Node.js (v18 or above recommended)
- npm or yarn
- MongoDB (local or MongoDB Atlas)
- Git

---

## 📥 Clone the Repository

```bash
git clone https://github.com/AIZEN-Hado/3.interviewIQ.git
cd 3.interviewIQ
````

---

## 📦 Install Dependencies

### Backend Setup

```bash
cd server
npm install
```

### Frontend Setup

```bash
cd ../client
npm install
```

---

## 🔐 Environment Variables Setup

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_api_key   # if used
```

Create a `.env` file inside the `client` folder:

```env
REACT_APP_API_URL=http://localhost:5000
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd server
npm start
```

Backend will run on:
[http://localhost:5000](http://localhost:5000)

---

### Start Frontend

```bash
cd client
npm start
```

Frontend will run on:
[http://localhost:3000](http://localhost:3000)

---

## 🧪 Verify Setup

* Open [http://localhost:3000](http://localhost:3000)
* Ensure frontend loads correctly
* Check backend connection (no console errors)
* Test basic features (login / interview flow)

---

## ❗ Common Issues & Fixes

### Port Already in Use

```bash
npx kill-port 5000
```

---

### MongoDB Connection Error

* Verify `MONGO_URI`
* Ensure MongoDB service is running

---

### node_modules Issues

```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Environment Variables Not Loading

* Ensure `.env` is in correct directory
* Restart server after changes

---

## 🚀 Optional Improvements

### Use Nodemon (Auto Restart Backend)

```bash
npm install -g nodemon
nodemon server.js
```

---

### Run Frontend & Backend Together

```bash
npm install -g concurrently
```

---

## 🧩 Project Structure

```
3.interviewIQ/
│
├── client/        # React frontend
├── server/        # Node.js backend
├── README.md
```

```
```






## 🔗 Links
[**🔗GO TO SITE**](https://hiremind-1-58y0.onrender.com/)

<img width="822" height="1600" alt="WhatsApp Image 2026-04-16 at 2 55 52 PM" src="https://github.com/user-attachments/assets/b202b807-659b-49b2-86df-c1057f27c046" />
<img width="822" height="1600" alt="WhatsApp Image 2026-04-16 at 2 55 52 PM" src="https://github.com/user-attachments/assets/d6045cf4-f054-444f-8a35-538148b288c4" />
<img width="581" height="1280" alt="WhatsApp Image 2026-04-16 at 2 55 52 PM (1)" src="https://github.com/user-attachments/assets/36d07bf5-7b7c-429a-98e8-2df4e3158b2e" />
<img width="821" height="1600" alt="WhatsApp Image 2026-04-16 at 2 55 52 PM (2)" src="https://github.com/user-attachments/assets/5912aac3-5c67-4fd2-a9ff-5ea393a005ef" />
<img width="828" height="1600" alt="WhatsApp Image 2026-04-16 at 2 55 53 PM" src="https://github.com/user-attachments/assets/a4719a70-a61d-426e-9c9a-32275426abfc" />
