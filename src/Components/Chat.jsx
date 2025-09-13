import React, { useEffect, useRef, useState } from 'react';
import io from "socket.io-client"
import { baseUrl } from '../utils/constants';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function connectToSocket() {
  return io(baseUrl);
}

const Chat = () => {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');
  const socket = useRef();
  const messagesEndRef = useRef(null); // 👈 scroll target
  const { receiverId } = useParams();
  const userSliceData = useSelector(store => store.user);
  const connectionSlice = useSelector(store => store.connection);
  const currUser = connectionSlice.find(item => item._id == receiverId);

  function btnClickHandler() {
    if (msg.length === 0) {
      toast.error("Please Enter your msg");
      return;
    }
    socket.current.emit("sendMsg", { message: msg, senderId: userSliceData._id, receiverId });
    setMsg("");
  }

  useEffect(() => {
    socket.current = connectToSocket();
    socket.current.emit("joinRoom", { receiverId, senderId: userSliceData._id });

    socket.current.on("receiveMsg", ({ message, senderId }) => {
      setMessages(prev => [...prev, { text: message, sender: senderId }]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    async function getChats() {
      const res = await axios.get(baseUrl + "/chat/" + receiverId, { withCredentials: true });
      let foundMsgs = res?.data?.messages?.map(item => {
        const { text, senderId } = item;
        return { text, sender: senderId };
      });
      setMessages(foundMsgs || []);
    }
    getChats();
  }, []);

  // 👇 Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-white rounded-3xl flex flex-col h-[80vh] shadow-2xl overflow-hidden">

      {/* Top Bar */}
      <div className="flex items-center gap-4 p-5 border-b border-gray-200 bg-gradient-to-r from-blue-100 to-indigo-100">
        <img
          src={currUser.image}
          alt="User Avatar"
          className="w-11 h-11 rounded-full object-cover border-2 border-indigo-400"
        />
        <h2 className="font-semibold text-gray-800 text-lg">
          {currUser.firstName + " " + currUser.lastName}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex flex-col h-full overflow-y-auto px-6 py-4 space-y-3 bg-gray-50 scroll-smooth">
        {messages.map((item, idx) => {
          const isSender = userSliceData._id === item.sender;
          return (
            <div
              key={idx}
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-md transition
                ${isSender
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white self-end rounded-br-none'
                  : 'bg-white text-gray-800 self-start border border-gray-200 rounded-bl-none'}`}
            >
              {item.text}
            </div>
          );
        })}
        <div ref={messagesEndRef} /> {/* 👈 Target scroll ref */}
      </div>

      {/* Input Bar */}
      <div className="border-t border-gray-200 px-4 py-3 bg-white flex items-center gap-3">
        <input
          value={msg}
          onKeyDown={(e) => e.key === "Enter" && btnClickHandler()}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 px-4 py-2 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={btnClickHandler}
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
