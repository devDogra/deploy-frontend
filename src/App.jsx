import { useState } from 'react';
import './App.css'
import axios from 'axios';


function App() {
  const [messages, setMessages] = useState([]);

  // const url = 'http://localhost:3000/messages';
  const url = `${import.meta.env.VITE_API_URL}/messages`
  async function deleteMessages() {
    await axios.delete(url);
  }
  async function postMessage() {
    const msg = { content: "HII" };
    await axios.post(url, msg)
    
  }
  async function getMessages() {
    const response = await fetch(url)
    const data = await response.json(); 

    console.log(data); 
    setMessages(data);
  }

  return (
    <>
      <button onClick={getMessages}>Get messages</button>
      <button onClick={postMessage}>Post message</button>
      <button onClick={deleteMessages}>deleteMessages</button>
      <ul>
        {messages.map(msg => {
          return <p key={msg._id}>{msg.content}</p>
        })}
      </ul>
    </>
  )
}

export default App
