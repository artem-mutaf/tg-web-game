import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp





function App() {

  useEffect( ()=>{
    tg.ready();
  }, [])

  const onClose =()=>{
    tg.close();
  }

  return (
    <div className="App">
      work
      <button className="button1" onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
