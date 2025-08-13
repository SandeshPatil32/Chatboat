import "../App.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function ChatUI() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [userId] = useState(Math.random().toString(36));
  
  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setChat((prev) => [
        ...prev,
        {
          text: msg.text,
          userId: msg.userId,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    });

    return () => socket.off("chatMessage");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chatMessage", { text: message, userId });
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-6">
          Chat App
        </h1>
        <div className="h-96 overflow-y-auto mb-4 p-2 border border-gray-200 rounded-lg bg-gray-50">
          {chat.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 p-2 rounded-lg ${
                msg.userId === userId
                  ? "bg-purple-100 text-right"
                  : "bg-gray-200"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs text-gray-500">{msg.timestamp}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex space-x-2">
          <input
            className="flex-1 border-2 border-blue-500 rounded-lg p-2 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 hover:cursor-pointer transition-colors disabled:opacity-50"
            disabled={!message.trim()}
          >
            Send
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Back to{" "}
          <Link to="/" className="text-cyan-800 hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ChatUI;
