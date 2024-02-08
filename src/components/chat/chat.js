"use client";
import axios from "axios";
import "./chat.css";
import { useRef, useState } from "react";

function ChatBot() {
  const chatInputRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState([]);
  const [isToggled, setToggled] = useState(false);

  const API_KEY = "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";

  // const generateResponse = (userMessage) => {
  //   const API_URL = "https://api.openai.com/v1/completions";
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       model: "gpt-3.5-turbo",
  //       messages: [{ role: "user", content: userMessage }],
  //     }),
  //   };
  //   console.log(requestOptions)

  //   fetch(API_URL, requestOptions)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.choices && data.choices.length > 0) {
  //         const aiResponse = data.choices[0].message.content.trim();

  //         // Create a unique key for the new chat message
  //         const newChatMessageKey = Date.now();

  //         const incomingMessage = (
  //           <li key={newChatMessageKey} className="chat incoming">
  //             <span className="material-symbols-outlined">smart_toy</span>
  //             <p>{aiResponse}</p>
  //           </li>
  //         );

  //         setChatMessages((prevMessages) => [...prevMessages, incomingMessage]);
  //       } else {
  //         console.error("No choices in the API response.");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //     });
  // };

  const processMessageToChatGPT = (userMessage) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ "role": "user", "content": userMessage }],
      }),
    };
    console.log(requestOptions)

    axios.post(API_URL, requestOptions)
      .then((res) => {console.log(res)})
      .then((data) => {
        if (data.choices && data.choices.length > 0) {
          const aiResponse = data.choices[0].message.content.trim();

          // Update chat with AI response
          const newChatMessage = (
            <li key={Date.now()} className="chat incoming">
              <span className="material-symbols-outlined">smart_toy</span>
              <p>{aiResponse}</p>
            </li>
          );
          setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);
        } else {
          console.error("No choices in the API response.");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  const handleChat = () => {
    const message = chatInputRef.current.value.trim();

    if (!message) return;

    // Update chat with user message
    const newChatMessage = (
      <li key={Date.now()} className="chat outgoing">
        <p>{message}</p>
      </li>
    );
    setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);

    // Call function to send user message and receive AI response
    processMessageToChatGPT(message);

    chatInputRef.current.value = "";
  };


  // const handleChat = () => {
  //   const message = chatInputRef.current.value.trim();

  //   if (!message) return;

  //   // Create a unique key for the new chat message
  //   const newChatMessageKey = Date.now();

  //   const newChatMessage = (
  //     <li key={newChatMessageKey} className="chat outgoing">
  //       <p>{message}</p>
  //     </li>
  //   );

  //   setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);

  //   chatInputRef.current.value = "";

  //   // Call generateResponse function to send user message and receive AI response
  //   generateResponse(message);
  // };

  const toggleChatbot = () => {
    setToggled(!isToggled);
  };
  return (
    <div className={`body ${isToggled ? "show-chatbot" : ""}`}>
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot z-50">
        <header>
          <h2>Chatbot</h2>
          <span className="close-btn material-symbols-outlined">close</span>
        </header>
        <ul className="chatbox">
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>
              Hi there 👋 <br />
              How can I help you today?
            </p>
          </li>
          {chatMessages}
        </ul>
        <div className="chat-input">
          <textarea
            ref={chatInputRef}
            placeholder="Enter a message..."
            spellCheck={false}
            required
          ></textarea>
          <span
            id="send-btn"
            onClick={handleChat}
            className="material-symbols-rounded"
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
