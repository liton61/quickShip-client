"use client";
import "./chat.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import avatar from '../../asstes/avatar.png';

function ChatBot() {
  const chatInputRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [isToggled, setToggled] = useState(false);

  // const API_KEY = "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";

  const generateResponse = (userMessage) => {
    // Define your predefined questions and answers
    const predefinedResponses = {
      "hi": "Hello Sir! How can I help you ?",
      "hello": "Hi Sir! How can I help you ?",
      "how are you": "I'm pity well, thanks for asking!",
      "how can i track my parcel": "Please, give your tracking id in Track Now field",
      "track my parcel": "Please, give your tracking id in Track Now field",
      "track parcel": "Please, give your tracking id in Track Now field",
      "parcel tracking": "Please, give your tracking id in Track Now field",
      "order status": "Please, give your tracking id in Track Now field and find your parcel status",
      "status": "Please, give your tracking id in Track Now field and find your parcel status",
      "i need help": "What type of help do you need ? Please, can you explain it or contact us with Mob:+8801660166344",
      "need help": "What type of help do you need, Sir ? Please, can you explain it or contact us with Mob:+8801660166344",
      "help": "What type of help do you need, Sir ? Please, can you explain it or contact us with Mob:+8801660166344",
      "order delay": "Sorry for the delay, We will inform you as soon as possible",
      "delay": "Sorry for the delay, We will inform you as soon as possible",
      "when i get my parcel": "Sorry for the delay, We will inform as soon as possible",
      "how to cancel parcel": "Please go to dashboard and delete parcel from My Order",
      "cancel parcel": "Please go to dashboard and delete parcel from My Order",
      "delete parcel": "Please go to dashboard and delete parcel from My Order",
      "parcel delete": "Please go to dashboard and delete parcel from My Order",
      "parcel return": "Please go to dashboard and return parcel from My Order",
      "return parcel": "Please go to dashboard and return parcel from My Order",
      "return": "Please go to dashboard and return parcel from My Order",
      "how can i return parcel": "Please go to dashboard and return parcel from My Order",
      "how can i reach you": "Please, contact us with Mob:+8801660166344 or gmail:quickship@qship.com",
      "contact": "Please, contact us with Mob:+8801660166344 or gmail:quickship@qship.com",
      "more information": "Please, contact us with Mob:+8801660166344 or gmail:quickship@qship.com",
      "information": "Please, contact us with Mob:+8801660166344 or gmail:quickship@qship.com",
      "i want to know more information about this": "Please, contact us with Mob:+8801660166344 or gmail:quickship@qship.com",

    };

    // Check if the user's message matches any predefined question
    const matchingResponse = predefinedResponses[userMessage.toLowerCase()];

    // If there's a matching predefined response
    if (matchingResponse) {
      // Create a unique key for the new chat message
      const newChatMessageKey = Date.now();

      // Construct the message element
      const incomingMessage = (
        <li key={newChatMessageKey} className="chat incoming">
          <span className="material-symbols-outlined"><Image src={avatar} height={50} width={50} alt="avatar"></Image></span>
          <p>{matchingResponse}</p>
        </li>
      );

      // Update the chat messages state with the predefined response
      setChatMessages((prevMessages) => [...prevMessages, incomingMessage]);
    } else {
      // If the message is not recognized, show an error message
      const errorMessage = "Sorry, I didn't understand that, Sir. Could you please rephrase your question?";

      // Create a unique key for the new chat message
      const newChatMessageKey = Date.now();

      // Construct the error message element
      const errorMessageElement = (
        <li key={newChatMessageKey} className="chat incoming error">
          <span className="material-symbols-outlined"><Image src={avatar} height={50} width={50} alt="avatar"></Image></span>
          <p>{errorMessage}</p>
        </li>
      );

      // Update the chat messages state with the error message
      setChatMessages((prevMessages) => [...prevMessages, errorMessageElement]);
    }
    // else{
    //   // If there's no predefined response, proceed with AI response
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

    //   fetch(API_URL, requestOptions)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.choices && data.choices.length > 0) {
    //         const aiResponse = data.choices[0].message.content.trim();

    //         // Create a unique key for the new chat message
    //         const newChatMessageKey = Date.now();

    //         // Construct the message element
    //         const incomingMessage = (
    //           <li key={newChatMessageKey} className="chat incoming">
    //             <span className="material-symbols-outlined">smart_toy</span>
    //             <p>{aiResponse}</p>
    //           </li>
    //         );

    //         // Update the chat messages state with the AI response
    //         setChatMessages((prevMessages) => [...prevMessages, incomingMessage]);
    //       } else {
    //         console.error("No choices in the API response.");
    //       }
    //     })
    //     .catch((err) => {
    //       console.error("Error fetching data:", err);
    //     });
    // }
  };


  const handleChat = () => {
    const message = chatInputRef.current.value.trim();

    if (!message) return;

    // Create a unique key for the new chat message
    const newChatMessageKey = Date.now();

    const newChatMessage = (
      <li key={newChatMessageKey} className="chat outgoing">
        <p>{message}</p>
      </li>
    );

    setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);

    chatInputRef.current.value = "";

    // Call generateResponse function to send user message and receive AI response
    generateResponse(message);
  };


  useEffect(() => {
    // Scroll to the bottom of the chatbox when chat messages change

  }, [chatMessages]);

  const toggleChatbot = () => {
    setToggled(!isToggled);
  };
  return (
    <div className={`body ${isToggled ? "show-chatbot" : ""}`}>
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot z-1000">
        <header>
          <h2>Help Center</h2>
          <span className="close-btn material-symbols-outlined">close</span>
        </header>
        <ul className="chatbox">
          <li className="chat incoming">
            <span className="material-symbols-outlined"><Image src={avatar} height={50} width={50} alt="avatar"></Image></span>
            <p>
              Hi Sir 👋 <br />
              How can I help you today?
            </p>
          </li>
          {chatMessages}
        </ul>
        <div className="chat-input">
          <textarea
            ref={chatInputRef}
            placeholder="Enter a message..."
            spellCheck={true}
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
