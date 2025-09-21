import React, { useState } from "react";
import Header from "./components/Header";
import ChatMessage from "./components/ChatMessage";
import { formatTime } from "../utils/chatUtils";
import LoadingIndicator from "./components/LoadingIndicator";
import ChatInput from "./components/ChatInput";
import { generateContent } from "./services/geminiApi";
import { startTransition } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate delay for bot response
    setTimeout(async () => {
      const botText = await generateContent(input); // await resolved text
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };

      startTransition(() => {
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      });
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              darkMode={darkMode}
              message={message}
              formatTime={formatTime}
            />
          ))}
          {isLoading && <LoadingIndicator darkMode={darkMode} />}
        </div>
      </div>
      <ChatInput
        darkMode={darkMode}
        input={input}
        setInput={setInput}
        loading={isLoading}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
