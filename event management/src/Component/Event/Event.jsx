import React from 'react';
import './Event.css';
import { Link } from 'react-router-dom';

const Event = () => {
  return (
    <div className='main-event'>
      <div className="event-content">
        <h1>Welcome to the Event Management System</h1>
        <h4>To create an event, please log in or register.</h4>
        <div className="btn-container">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <span className="btn-separator">or</span>
          <Link to="/signup">
            <button className="btn btn-secondary">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;