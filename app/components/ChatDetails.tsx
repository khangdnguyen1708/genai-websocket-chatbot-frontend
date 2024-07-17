'use client';
import { useRef, useState, useEffect } from 'react';
import useWebSocket from '../hooks/useWebSocket'

const websocketUrl = 'wss://yyajqmacn4.execute-api.us-east-1.amazonaws.com/prod';

const RAG_NAME = "RAG GenAI Chatbot"
const ADMIN_NAME = "CKVN RAG GenAI Chatbot"

const ChatDetails = () => {
    const { messages, newMessage, setNewMessage, sendMessage, isConnected } = useWebSocket(websocketUrl);
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);
    const chatbox = useRef<HTMLDivElement>(null);
    const chatContainer = useRef<HTMLDivElement>(null);
    const userInput = useRef<HTMLInputElement>(null);
    const sendButton = useRef<HTMLButtonElement>(null);
    const openChatButton = useRef<HTMLButtonElement>(null);
    const closeChatButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (chatbox.current) {
            chatbox.current.scrollTop = chatbox.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (chatContainer.current) {
            if (isChatboxOpen) {
                chatContainer.current.classList.remove('hidden');
            } else {
                chatContainer.current.classList.add('hidden');
            }
        }
    }, [isChatboxOpen]);

    const toggleChatbox = () => {
        setIsChatboxOpen(prevState => !prevState);
    };

    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === 'Enter' && isConnected) {
            sendMessage()
        }
    }

    return (
        <div>
            <div className="fixed bottom-0 right-0 mb-4 mr-4">
                <button onClick={toggleChatbox} ref={openChatButton} id="open-chat" className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    {RAG_NAME}
                </button>
            </div>
            <div ref={chatContainer} id="chat-container" className="hidden fixed bottom-16 right-4 w-96">
                <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                    <div className="p-4 border-b bg-emerald-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold">{ADMIN_NAME}</p>
                        <button onClick={toggleChatbox} ref={closeChatButton} id="close-chat" className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div ref={chatbox} id="chatbox" className="bg-white p-4 h-80 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-2 ${message.user === 'Human' ? 'text-right' : ''}`}>
                            <p className={`rounded-lg py-2 px-4 inline-block ${message.user === 'Human' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                {message.text}
                            </p>
                        </div>
                    ))}

                </div>
                <div className={`bg-white p-4 border-t flex ${isConnected ? '' : 'hidden'}`}>
                    <input ref={userInput} onKeyUp={handleKeyPress} value={newMessage} onChange={(e) => setNewMessage(e.target.value)} id="user-input" type="text" placeholder="Type a message" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button ref={sendButton} onClick={sendMessage} id="send-button" className="bg-emerald-500 text-white px-4 py-2 rounded-r-md hover:bg-emerald-600 transition duration-300">Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatDetails;
