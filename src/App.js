import './App.css';
import { useState, useEffect } from 'react';
import { getChats } from "./firebase";

function App() {
  const [chats, setChats] = useState([]);
  useEffect(async()=>{
    const chats = await getChats();
    setChats(chats);
  }, []);

  return (
    <div>
      {
        chats ? 
        <>
          <p>FireStore successfully connected</p>
          <div>{JSON.stringify(chats)}</div>
        </>
          :
        <>
          <p>Data loading failed</p>
        </>
      }
    </div>
  );
}

export default App;
