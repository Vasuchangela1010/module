import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './Components/Dialog';

function App() {
  const [open,setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  }
  return (
    <div className="app">
      { open ? <Dialog /> : <button onClick={openDialog} className="home_btn">Open Dialog</button>}
    </div>
  );
}

export default App;
