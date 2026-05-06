"use client";

import React, { useState, useEffect, useRef } from "react";
import keywordsData from "../data/keywords.json";
import responsesData from "../data/responses.json";

type Sender = "user" | "bot";

interface Message {
  id: string;
  text: string;
  sender: Sender;
}

const keywords = keywordsData as Record<string, string[]>;
const responses = responsesData as Record<string, string>;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: responses["greeting"], sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot response logic
    setTimeout(() => {
      const lowerInput = userMessage.text.toLowerCase();
      let matchedCategory = "default";

      for (const [category, words] of Object.entries(keywords)) {
        if (words.some((word) => lowerInput.includes(word))) {
          matchedCategory = category;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[matchedCategory] || responses["default"],
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* ifchatbox is open */}
      {
        isOpen && (
        <div className="mb-4 w-88 sm:w-100 h-125 max-h-[90vh] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="bg-neutral-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-lg">Nobleman</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-neutral-900 text-white self-end rounded-br-none"
                    : "bg-white text-gray-800 border border-gray-100 shadow-sm self-start rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 bg-gray-50 p-1 pl-4 rounded-full border border-gray-200 focus-within:border-neutral-400 transition-colors"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 py-2"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 bg-neutral-900 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
        )
      }

      {/* toggle button */}
      <button
        onClick={toggleChat}
        className={`${ isOpen ? "scale-0 opacity-0 absolute pointer-events-none" : "scale-100 opacity-100" } w-14 h-14 bg-neutral-900 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-neutral-800 hover:scale-115 cursor-pointer transition-all duration-300 ease-out z-50`}
        aria-label="Open chat"
      >
        Chat
      </button>
    </div>
  );
}