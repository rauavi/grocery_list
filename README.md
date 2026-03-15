# 🛒 Grocery List

A clean, minimalist grocery list application built with **React**. Designed with a striking black & white aesthetic — no clutter, just productivity.

## ✨ Features

- **Add items** — Quickly add grocery items to your list
- **Check off items** — Mark items as done with custom checkboxes
- **Delete items** — Remove items you no longer need (hover to reveal)
- **Search & filter** — Instantly filter your list as you type
- **Persistent storage** — Items are saved in `localStorage` so nothing is lost on refresh
- **Responsive design** — Looks great on desktop and mobile

## 🛠 Tech Stack

- **React 19** — Component-based UI
- **CSS3** — Custom properties, transitions, and animations
- **Google Fonts** — Inter typeface
- **localStorage** — Client-side data persistence

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/rauavi/grocery_list.git

# Navigate to the project
cd grocery_list

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── App.js          # Main app component with state management
├── App.css         # App-level styles
├── index.css       # Global design system (black & white theme)
├── index.js        # React entry point
├── header.js       # Header component
├── footer.js       # Footer with item count
├── main.js         # List rendering with check/delete
├── AddItem.js      # Add item form
└── searchItem.js   # Search/filter form
```

## 📄 License

This project is open source and available for personal and educational use.
