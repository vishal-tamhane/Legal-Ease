import React, { useState } from 'react'
import { MessageSquare, X, Send, User } from 'lucide-react'
import './ChatbotWidget.css'

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your JusticeStream AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: "Thank you for your message. This is a demonstration response. In a real implementation, this would connect to an AI API.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <div className="chatbot-wrapper">
      {isOpen ? (
        <div className="chat-container">
          <div className="chat-header">
            <div className="header-left">
              <MessageSquare size={20} />
              <h3>Legal Assistant</h3>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <X size={20} />
            </button>
          </div>

          <div className="messages-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.isUser ? 'user' : 'ai'}`}
              >
                <div className="message-icon">
                  {msg.isUser ? <User size={16} /> : <MessageSquare size={16} />}
                </div>
                <div className="message-content">
                  <p>{msg.text}</p>
                  <span className="timestamp">
                    {msg.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <form className="input-container" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your legal query..."
            />
            <button type="submit">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button className="chat-toggle" onClick={toggleChat}>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  )
}

export default ChatbotWidget