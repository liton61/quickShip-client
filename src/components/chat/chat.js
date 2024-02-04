"use client";
import "./chat.css";
import { useRef, useState } from "react";

function ChatBot() {
  const chatInputRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState([]);
  const [isToggled, setToggled] = useState(false);

  const API_KEY = "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";

  const generateResponse = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    };

    fetch(API_URL, requestOptions)
  .then((res) => res.json())
  .then((data) => {
    if (data.choices && data.choices.length > 0) {
      const aiResponse = data.choices[0].message.content.trim();
      const incomingMessage = (
        <li key={chatMessages.length} className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>{aiResponse}</p>
        </li>
      );
      setChatMessages((prevMessages) => [...prevMessages, incomingMessage]);
    } else {
      // Handle the case where choices array is empty or undefined
      console.error("No choices in the API response.");
    }
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });

  };

  const handleChat = () => {
    const message = chatInputRef.current.value.trim();
    setUserMessage(message); // Set userMessage state

    if (!message) return;

    // Create the chat message element using JSX
    const newChatMessage = (
      <li key={chatMessages.length} className="chat outgoing">
        <p>{message}</p>
      </li>
    );

    // Update the chat messages state, efficiently re-rendering the list
    setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);

    // Clear input field
    chatInputRef.current.value = "";

    // Simulate incoming message after a delay
    setTimeout(() => {
      const incomingMessage = (
        <li key={chatMessages.length} className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>Thinking...</p>
        </li>
      );
      setChatMessages((prevMessages) => [...prevMessages, incomingMessage]);
      generateResponse(message);
    }, 600); // Adjust the delay as needed
  };

  const toggleChatbot = () => {
    setToggled(!isToggled);
   const show = "show-chatbot"
  };
  return (
    <div className={`body ${isToggled ? 'show-chatbot' : ''}`}>
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
