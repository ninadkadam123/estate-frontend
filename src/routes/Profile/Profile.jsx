import React, { useContext } from 'react';
import './Profile.css';
import List from '../../components/List/List';
import Chat from '../../components/Chat/Chat';
import apiRequest from '../../components/lib/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await apiRequest.post('auth/logout');
      updateUser(null);

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to={'/profile/update'}>
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:{' '}
              <img
                src={currentUser.avatar || './noavatar.jpg'}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}
