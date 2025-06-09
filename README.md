# NC News Frontend (Kaki Ongoing Project)

A React-based news site frontend, developed as part of my full-stack bootcamp project.  
This project connects to a RESTful backend API and implements core user features such as:

- Fetching articles & comments
- Sorting by topic
- Upvoting articles
- Posting & deleting comments

## 🛠 Tech Stack

- React (with hooks)
- React Router
- Axios
- Day.js
- HTML/CSS (vanilla)
- Deployed via Netlify

## 🔧 Core Features

- 📰 **Article Feed**: view all articles by topic
- 📖 **Single Article Page**: article content, vote counter, and comments
- 💬 **Comments**: see all comments, post your own, and delete if author
- ⬆️⬇️ **Vote Functionality**: optimistic UI with rollback and disabled state

 
 ## 🔧 In Progress

- Add user authentication
- Improve comment form UX
- Add sorting/filtering dropdowns
- Add loading skeletons

Stay tuned — I’ll continue refining this app!

## 🧠 What I Learned

This project helped me understand:

- React's data-fetching lifecycle with `useEffect`
- How to manage optimistic UI (e.g. upvoting before server confirms)
- Designing a reusable vote component with rollback logic
- Error handling and user feedback (disabled state, error messages)

## Getting Started
```bash
git clone https://github.com/kakiCoder511/fe-nc-news.git
cd fe-nc-news
npm install
npm start






