// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 🟢 Node.js Full Notes @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 📌 1. What is Node.js?
// Theory:
// Node.js is a runtime that lets you run JavaScript code on the server.
// It uses the V8 engine and is used to build fast and scalable backend apps.

// 📌 2. Node.js Installation and Setup
// Theory:
// We install Node.js from the official website.
// After installation, we use node and npm commands in the terminal.
// Command:
node -v
npm -v

// 📌 3. Creating a Simple Server with http module
// Theory:
// Node.js provides a built-in http module to create web servers.
// We can respond to browser requests using this server.
// Example:
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// 🔹 What is fs?
// fs means File System.
// It is a built-in Node.js module used to work with files and folders.
// You can read, write, update, delete files and folders using fs.
// To use it:
const fs = require('fs');

// 🧩 Two Types of Methods in fs
//1) Asynchronous (Non-blocking) – Recommended
//2) Synchronous (Blocking) – Slows down the app

// 📂 File Operations
// ✅ 1. Read File
// ▶ Asynchronous:
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  


