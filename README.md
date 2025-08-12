# 📊 DataPulse

A simple full-stack web application that demonstrates fetching and displaying data from a Node.js backend using a modern JavaScript frontend.
## 🚀 Features
- **Backend**: Node.js + Express server
- **Frontend**: HTML, CSS, and JavaScript
- Fetches JSON data from backend and displays it dynamically
- Modular structure for easy extension

## 📂 Project Structure
DataPulse/
│
├── backend/
│ ├── server.js # Node.js + Express server
│ └── package.json # Backend dependencies
│
├── frontend/
│ ├── index.html # Main UI
│ ├── style.css # Styling
│ ├── script.js # Frontend logic (fetch + render)
│
└── README.md # Project documentation

## ⚙️ Installation & Setup

1. Backend Setup
bash
Copy code
cd backend
npm install
node server.js
Backend runs on: http://localhost:5000

2. Frontend Setup
You can open frontend/index.html directly in your browser
or use a simple static server like:

cd frontend
npx serve
Frontend runs on: http://localhost:3000

🔗 How It Works
Frontend sends a GET request to the backend at /api/data

Backend responds with JSON data

Frontend dynamically renders this data inside styled cards

📌 Example API Response
json
Copy code
{
  "status": "success",
  "items": [
    { "name": "Item 1", "value": 100 },
    { "name": "Item 2", "value": 200 },
    { "name": "Item 3", "value": 300 }
  ]
}
# 💡 Future Improvements
Add a database (MongoDB/MySQL) for persistent data
Create a form to add/remove items dynamically
Add real-time updates using WebSockets
Improve styling with frameworks like TailwindCSS or Bootstrap
