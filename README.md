# DevDocs

A modern documentation and code snippet manager built with **React** and **Tailwind CSS**.

DevDocs helps organize notes, code snippets, and tags in one place with a clean interface designed for quick access and productivity. All data is stored locally using the browser's Local Storage, making the application lightweight and easy to use without any backend.

---

## ✨ Features

### 📝 Notes
- Create, edit and delete notes
- Rich note descriptions
- Add multiple tags
- Search notes instantly
- View note details

### 💻 Code Snippets
- Save reusable code snippets
- Store programming language information
- Copy snippets easily
- Edit and delete snippets
- Search snippets
- View snippet details

### 🏷 Tags
- Automatically generated from notes and snippets
- Tag usage count
- View all notes and snippets related to a selected tag
- Sorted by popularity

### 📊 Dashboard
- Total Notes
- Total Snippets
- Total Tags
- Recent Notes
- Recent Snippets
- Most Used Tags
- Quick Actions
- Dynamic greeting based on current time

### 🎨 User Interface
- Modern dark theme
- Responsive layout
- Professional dashboard
- Sidebar navigation
- Reusable card components
- Clean typography
- Smooth hover effects

---

## 🛠 Tech Stack

- React
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- Local Storage
- React Hot Toast
- React Icons

---
## 📂 Project Structure

```text
src
│
├── assets
│   ├── devdocs-logo.png
│   ├── robin-pfp.jpg
│   └── ...
│
├── components
│   │
│   ├── Dashboard
│   │   ├── QuickAction.jsx
│   │   ├── StatCard.jsx
│   │   └── WelcomeSection.jsx
│   │
│   ├── Notes
│   │   ├── NoteCard.jsx
│   │   └── NoteForm.jsx
│   │
│   ├── Snippet
│   │   ├── SnippetCard.jsx
│   │   └── SnippetForm.jsx
│   │
│   └── Tags
│       └── TagsCard.jsx
│
├── layout
│   ├── Layout.jsx
│   └── Sidebar.jsx
│
├── pages
│   │
│   ├── Dashboard.jsx
│   │
│   ├── Notes
│   │   ├── Notes.jsx
│   │   ├── CreateNote.jsx
│   │   ├── EditNote.jsx
│   │   └── NoteDetails.jsx
│   │
│   ├── Snippet
│   │   ├── Snippets.jsx
│   │   ├── CreateSnippet.jsx
│   │   ├── EditSnippet.jsx
│   │   └── SnippetDetails.jsx
│   │
│   └── Tags
│       ├── Tags.jsx
│       └── TagsDetails.jsx
│
├── services
│   ├── noteService.js
│   ├── snippetService.js
│   └── tagsService.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd devdocs
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📚 What I Learned

Building DevDocs helped me strengthen my understanding of React by applying concepts in a complete application instead of isolated examples.

Some of the concepts I practiced include:

- Creating reusable React components
- Managing application state with `useState`
- Client-side routing using React Router
- Passing and managing props between components
- Conditional rendering
- Form handling and validation
- CRUD operations
- Local Storage for persistent data
- Creating service-based project structure
- Building reusable UI layouts
- Searching and filtering data
- Working with JavaScript array methods like:
  - `map()`
  - `filter()`
  - `reduce()`
  - `some()`
  - `flatMap()`
- Responsive design using Tailwind CSS
- Organizing larger React projects
- Writing cleaner and more maintainable code

One of the biggest takeaways from this project was understanding how individual React concepts come together to build a complete application rather than learning them in isolation.

---

## 👨‍💻 Author

**Sajal Jain**

Built with React and Tailwind CSS as part of my journey to strengthen my frontend development skills by building a complete real-world application from scratch.