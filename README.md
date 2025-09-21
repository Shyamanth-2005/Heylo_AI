# 🤖 Heylo AI Chat

A modern **AI-powered chat application** built with **React + TailwindCSS** that connects to **Google’s Gemini API**.  
It provides a clean and responsive interface for chatting with an intelligent assistant in real-time.

---

## 📖 Description

Heylo AI Chat is designed to deliver **seamless AI conversations** with a lightweight and scalable architecture.  
It comes with **dark/light mode**, **loading states**, and **timestamped messages** for better usability.

Since Gemini API doesn’t support direct browser calls (CORS restrictions), the project can be extended with a **Node.js backend proxy** to securely handle API requests.

---

## ⚡ Features

- 💬 Real-time AI conversations
- 🌙 Dark/Light mode toggle
- ⏳ Loading indicator for bot replies
- 🕒 Timestamps for each message
- 🎨 Responsive UI with TailwindCSS
- 🚀 Easily deployable (Vercel, Netlify, GitHub Pages)

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Icons:** Lucide-React
- **AI Model:** Google Gemini API

---

## 📦 Installation

Follow these steps to set up the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/heylo-ai-chat.git
cd heylo-ai-chat
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

```
Create a .env file in the project root and add your Gemini API key:

.env
VITE_GEMINI_API_KEY=your_api_key_here
```

### 4️⃣ Start the development server

```
bash
npm run dev

```
