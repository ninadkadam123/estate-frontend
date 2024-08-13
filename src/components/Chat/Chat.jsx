import React, { useState } from 'react';
import './Chat.css';

export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="./58.png" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet......</p>
        </div>
        <div className="message">
          <img src="./58.png" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet......</p>
        </div>
        <div className="message">
          <img src="./58.png" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet......</p>
        </div>
        <div className="message">
          <img src="./58.png" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet......</p>
        </div>
        <div className="message">
          <img src="./58.png" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet......</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="58.png" alt="" />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur....</p>
              <span>1 hour Ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
