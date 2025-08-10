# 🗳️ One Vote — Online Voting System

An **educational project** demonstrating the real-world implementation of **React** (frontend) and **Django** (backend) to create a secure, simple, and accessible **online voting system**.

This project aims to make the voting process easier, more transparent, and more efficient — especially for **educational institutions** and **small organizations**.

---

## 📌 About the Project

**One Vote** is a web-based voting platform where users can securely log in, vote for their preferred candidate, and view results once published by the admin.

Key Highlights:
- **Frontend:** React (Responsive, user-friendly interface)
- **Backend:** Django (Authentication, business logic, database management)
- **Deployment:** Fully deployed online for live testing

---

## 🎯 Motivation
The goal of this project is to demonstrate how modern web technologies can be used to simplify an important process like voting. It emphasizes **security**, **ease of use**, and **real-time results**.

---

## 👥 Target Audience
- **Educational institutions** conducting student body elections
- **Small organizations** voting for committees or decision-making
- Anyone wanting to understand the integration of React and Django in a real-world project

---

## ✨ Features

### 👤 For Voters
- **Secure Login:** Voters must log in with a valid ID
- **One Vote Policy:** Users can only vote once
- **Vote Confirmation:** Visual feedback after a successful vote
- **Responsive Design:** Works on desktops, tablets, and mobiles

### 🛠 For Admin
- **Candidate Management:** Add or remove candidates
- **Result Management:** View vote counts in real-time
- **Result Publishing:** Keep results hidden until officially released

---

## 🖥️ Technologies Used
- **Frontend:** React, Tailwind CSS (or your styling choice)
- **Backend:** Django REST Framework
- **Database:** SQLite / PostgreSQL (configurable)
- **Deployment:** Deployed to `<YOUR_DEPLOYMENT_PLATFORM>`  
  *(e.g., Render, Vercel, Railway, or your hosting platform)*

---

## 🚀 Live Demo
🔗 **Live Project:** [Click Here to View](https://one-vote-khaki.vercel.app/) 
🔗 **GitHub Repository:** [Click Here](<YOUR_GITHUB_LINK>)

---

## 🗂️ Project Structure
```
OneVote/
│
├── backend/           # Django backend
│   ├── manage.py
│   ├── onevote_app/
│   └── db.sqlite3
│
├── frontend/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone (https://github.com/anmolrai03/OneVote.git)
cd OneVote
```

### 2️⃣ Backend Setup (Django)
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3️⃣ Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```

### 4️⃣ Access the App
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`

---

## 🗳️ How It Works

1. **User Login:**  
   - Enter your **Voter ID** to log in.
2. **Vote Casting:**  
   - If you haven’t voted yet, you’ll see the list of candidates.  
   - Select your favorite candidate and submit.
3. **Vote Restriction:**  
   - Once you’ve voted, you cannot vote again.
4. **Result Viewing:**  
   - Admins can see results anytime.  
   - Public results are shown only when the admin publishes them.

---

## 📌 Future Improvements
- Two-factor authentication for voters
- Blockchain-based vote storage
- Email/SMS notifications after vote submission
- Multi-language support
