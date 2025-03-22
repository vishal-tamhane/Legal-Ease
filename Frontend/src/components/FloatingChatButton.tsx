import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function FloatingChatButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/legal-ai'); // Assuming this is the route for the LegalAI section
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 z-50 cursor-pointer"
      aria-label="Open Legal AI Chat"
    >
      <MessageCircle size={24} />
    </motion.button>
  );
} 