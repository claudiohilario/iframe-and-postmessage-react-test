import React, { useRef, useEffect, useState } from 'react';
import './App.css';

import { Iframe } from './Components';

function App() {
  const iframeRef = useRef(null);
  const inputRef = useRef(null);

  const [message, setMessage] = useState('');

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const iframeUrl = 'http://localhost:4001';
      const hasNewMessage = event.origin === iframeUrl;
      if (hasNewMessage) {
        setMessage(event.data);
      }
    })
  }, [])

  function handleClickSend(event) {
    const inputValue = inputRef.current.value;
    iframeRef.current.contentWindow.postMessage(inputValue, "*");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input ref={inputRef} placeholder="message to send" />
          <button onClick={handleClickSend}>Send to iframe</button>
        </div>
        <Iframe iframeRef={iframeRef} name="example" src="http://localhost:4001" width={600} height={600} />
        {message}
      </header>
    </div>
  );
}

export default App;
