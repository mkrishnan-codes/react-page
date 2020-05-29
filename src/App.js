import React, { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';

function App() {
  const [open, setopen] = useState(false);
  const toggle = () => {
    setopen(!open)
  }
  return (
    <>
      <Sidebar open={open} onClose={toggle} />
      <Main open={open} onClick={toggle} />
    </>
  );
}

export default App;
