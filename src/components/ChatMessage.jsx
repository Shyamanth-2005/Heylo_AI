import { Bot, User } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";

function ChatMessage({ darkMode, message, formatTime }) {
  const isUser = message.sender === "user";

  const containerClasses = `flex ${isUser ? "justify-end" : "justify-start"}`;
  const messageClasses = `flex max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3.5 ${
    isUser
      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
      : darkMode
      ? "bg-gray-800 text-gray-100 border border-gray-700"
      : "bg-white text-gray-800 shadow-md"
  }`;
  const iconClasses = `flex-shrink-0 mr-3 ${
    isUser
      ? "text-indigo-200"
      : darkMode
      ? "text-indigo-400"
      : "text-indigo-600"
  }`;
  const timeClasses = `text-xs ${
    isUser ? "opacity-70" : darkMode ? "text-gray-400" : "text-gray-500"
  } ml-2`;

  return (
    <div className={containerClasses}>
      <div className={messageClasses}>
        <div className={iconClasses}>
          {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
        </div>
        <div className="flex-1">
          <div className="mb-1 flex justify-between items-center">
            <span className="font-medium">
              {isUser ? "You" : "AI Assistant"}
            </span>
            <span className={timeClasses}>{formatTime(message.timestamp)}</span>
          </div>
          <p className="text-sm md:text-base whitespace-pre-wrap break-words leading-relaxed">
            {isUser ? (
              message.text
            ) : (
              <ReactMarkdown>{message.text}</ReactMarkdown>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
