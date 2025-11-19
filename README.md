# Namaste React Project - Episode 4

A **React project built with Parcel** — a food delivery website clone that demonstrates React fundamentals, state management, and testing setup.

## 📌 Live Demo

[View Live on Vercel](https://fooddeliverysitereact.vercel.app/)

---

## 🏗 Project Structure

Header
├─ Logo
└─ Navigation Items

Body
├─ Search Bar
└─ Restaurant Container
└─ Restaurant Card
├─ Image
├─ Name
├─ Cuisines
└─ Rating

Footer
├─ Links
├─ Copyright
├─ Social Links
└─ Address
└─ Contact


---

## ⚡ Key Features & Notes

- Always use **unique IDs** as React `key` props; avoid using array index when possible.  
- Default and named exports can be used in the same file, but import carefully.  
- React components **re-render automatically** whenever their state changes.  
- Hooks are normal utility functions; follow best practices for state and effect management.

---

## 🛠 Technology Stack

- **Frontend:** React, Parcel  
- **State Management:** Redux Toolkit  
- **Styling:** CSS / Tailwind (if used)  
- **Testing:** Jest, React Testing Library

---

## 🧪 Testing Setup

1. Install testing libraries:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom


Install Babel dependencies for JSX support:

npm install --save-dev @babel/preset-react


Configure Babel for Parcel default transpilation.

Configure Jest:

Include @babel/preset-react

Install jsdom for DOM environment

Use __tests__ folders for test files

📚 Notes & Best Practices

When a state variable changes, the component re-renders automatically.

Always prefer unique IDs for keys in lists to avoid rendering issues.

Carefully manage default vs named exports/imports.

React hooks are reusable utility functions; use them following React rules.

🚀 How to Run Locally

Clone the repo:

git clone https://github.com/yourusername/namaste-react-episode4.git
cd namaste-react-episode4/Episode_4


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:1234
 in your browser.

🌐 License

This project is for learning purposes.


---

If you want, I can also make a **version with badges for Node, React, Redux, and Vercel** that looks very professional on GitHub.  

Do you want me to do that?