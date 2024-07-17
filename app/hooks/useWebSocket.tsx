import { useState, useEffect, useRef } from "react";
const WELCOME_MESSAGES = [
  {
    user: "Assistant",
    text: "Hello, I am CKVN GenAI Chabot, how can I help you?",
  },
  {
    user: "Assistant",
    text: "Xin chào tôi là CKVN GenAI Chabot, tôi có thể giúp gì được bạn?",
  },
];
const MODEL_ID = "anthropic.claude-3-sonnet-20240229-v1:0";
const TEMPERATURE = 0;

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState(WELCOME_MESSAGES);
  const [newMessage, setNewMessage] = useState("");
  const [partialMessage, setPartialMessage] = useState("");
  const socket = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.current = new WebSocket(url);

    socket.current.onopen = () => {
      console.log("Connected to WebSocket server");
      setIsConnected(true); // Set connection status to true
    };

    socket.current.onclose = () => {
      console.log("Disconnected from WebSocket server");
      setIsConnected(false); // Set connection status to false
    };

    socket.current.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setIsConnected(false); // Set connection status to false
    };

    socket.current.onmessage = (event) => {
      const messageChunk = event.data;
      if (messageChunk != "<End of LLM response>") {
        setPartialMessage((prevPartial) => prevPartial + messageChunk);

        // Update the last message with the partial message
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage && lastMessage.user === "Assistant") {
            const updatedLastMessage = {
              ...lastMessage,
              text: lastMessage.text + messageChunk,
            };
            return [
              ...prevMessages.slice(0, prevMessages.length - 1),
              updatedLastMessage,
            ];
          } else {
            return [...prevMessages, { user: "Assistant", text: messageChunk }];
          }
        });
      };
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, [url]);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "Human", text: newMessage },
      ]);
      setNewMessage("");
      if (socket.current && socket.current.readyState === WebSocket.OPEN) {
        const request = buildRequest(newMessage);
        console.log(`sending ${request}`);
        socket.current.send(request);
      }
    }
  };

  const buildRequest = (prompt: string) => {
    return `{"action":"invokeModel", "parameters":{"modelId": "${MODEL_ID}", "temperature": ${TEMPERATURE}}, "prompt": "Human:${prompt} Assistant:"}`;
  };

  return {
    messages,
    newMessage,
    setNewMessage,
    sendMessage,
    isConnected,
  };
};

export default useWebSocket;
