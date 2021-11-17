import './App.css';
import { useState, useEffect } from 'react';
import { getChats } from "./firebase";
import Authentication from './components/Authentication';

function App() {
  const [chats, setChats] = useState([]);
  useEffect(()=>{
    const fetchChats = async() =>{
      const chats = await getChats();
      setChats(chats);
    }
    fetchChats();
  }, []);

  return (
    <>
    <Authentication/>
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
    </>
  );
}

export default App;
