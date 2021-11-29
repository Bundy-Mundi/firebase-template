//import { useState, useEffect } from 'react';
//import { getChats } from "./firebase";
//import "./firebase";
import Authentication from './components/Authentication';
import AddChatRealTime from './components/AddChatRealTime';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
    <Authentication />
    {
      user.loggedIn ? 
      <AddChatRealTime/>
        :
      null
    }
    </>
  );
}

export default App;
