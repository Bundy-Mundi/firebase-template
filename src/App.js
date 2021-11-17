//import { useState, useEffect } from 'react';
//import { getChats } from "./firebase";
import Authentication from './components/Authentication';
import AddChatRealTime from './components/AddChatRealTime';

function App() {
  return (
    <>
    <Authentication/>
    <AddChatRealTime/>
    </>
  );
}

export default App;
