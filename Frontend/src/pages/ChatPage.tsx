import { useState } from 'react';
import { Send } from 'lucide-react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface GroqResponse {
  id: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
  }>;
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([{
    role: 'system',
    content: 'You are a helpful legal assistant. Provide clear and concise responses to legal queries.'
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    const apiMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    apiMessages.push({
      role: userMessage.role,
      content: userMessage.content
    });

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 2048,
          top_p: 0.9,
          stream: false
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data: GroqResponse = await response.json();

      if (!data.choices?.[0]?.message?.content) {
        throw new Error('Invalid response format from API');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to get response');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col  bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex mt-24  justify-center px-4 sm:px-6 py-6 lg:px-8 ">
        <div className="w-full max-w-4xl ">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Legal Assistant Chat</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Ask your legal questions and get instant assistance from our AI legal assistant.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl h-[420px] flex flex-col border border-white ">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">

              <h1 className="text-6xl max-sm:text-4xl font-bold text-gray-400 dark:text-gray-600 text-center py-3">Legal AI</h1>


              {messages.slice(1).map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg ${message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                      }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-700">
                    Thinking...
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-center">
                  <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm dark:bg-red-900 dark:text-red-300">
                    {error}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask your legal question..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 