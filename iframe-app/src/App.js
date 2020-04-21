import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const [origin, setOrigin] = useState('');
  const [message, setMessage] = useState('')

  function handleMessage(event) {
    setOrigin(`Origin: ${event.origin}`);

    const parentUrl = 'http://localhost:4000';

    if (event.origin === parentUrl) {
      setMessage(`Data: ${event.data}`);
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleMessage);
  }, []);

  function handleClickSend() {
    const inputValue = inputRef.current.value;
    window.parent.postMessage(inputValue, "*");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {origin}
        </p>
        <p>
          {message}
        </p>
        <div>
          <input ref={inputRef} placeholder="message to send" />
          <button onClick={handleClickSend}>Send to parent</button>
        </div>
      </header>
    </div>
  );
}

export default App;
