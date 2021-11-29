//import { useState, useEffect } from 'react';
//import { getChats } from "./firebase";
import Authentication from './components/Authentication';
import AddChatRealTime from './components/AddChatRealTime';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  //const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  console.log(user)
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
