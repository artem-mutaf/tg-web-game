import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp





function App() {


  

  useEffect( ()=>{
    tg.ready();
  }, [])
  var elem = 0;
  const click =()=>{
    
    elem++;
    document.getElementById('Line').innerHTML= elem;
  }

  return (
    <div className="App">
      
      <button className="button1" onClick={click}>
      </button>
      <div className="cislo" id='Line'></div>

      
    </div>
  );
}

export default App;
