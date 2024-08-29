import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useNotificationStore } from '../lib/notificationStore.js';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  if (currentUser) {
    fetch();
  }

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>NinadEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || './noavatar.jpg'}
              alt="user"
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && (
                <div className="notification">{number}</div>
              )}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
