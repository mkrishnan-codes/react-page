import React, { useState } from 'react';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';

function App() {
  const [open, setopen] = useState(false);
  const toggle = () => {
    setopen(!open)
  }
  return (
    <>
      <Header open={open} onClick={toggle} >
      </Header>
      <Sidebar open={open} onClose={toggle} />
      
    </>
  );
}

export default App;
