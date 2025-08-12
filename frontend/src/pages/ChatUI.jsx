import '../App.css';
import { Link  } from 'react-router-dom';
import React, { useEffect } from 'react';
import { io } from "socket.io-client";
import { useState } from 'react';

const socket = io("http://localhost:5000");

function ChatUI(){
const [message, setMessage] = useState("");
const [chat, setChat] = useState([]);

useEffect(() => {
  socket.on("chatMessage", (msg) => {
    setChat((prev) => [...prev, msg]);
  });

  return () => socket.off("chatMessage");
}, []);

const sendMessage = (e) => {
e.preventDefault();
socket.emit("chatMessage", message);
sendMessage("");
};

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {chat.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatUI;
