import React from 'react'
import ChatbotWidget from './components/ChatbotWidget'
import './index.css'

const App = () => {
  return (
    <div className="app">
      <h1>Legal-Ease Platform</h1>
      <p>Welcome to your legal assistance portal</p>
      <ChatbotWidget />
    </div>
  )
}

export default App