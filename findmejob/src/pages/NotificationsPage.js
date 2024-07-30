import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('/api/notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Notifications</h1>
      <div className="list-group">
        {notifications.map(notification => (
          <div className="list-group-item" key={notification.id}>
            <h5>{notification.title}</h5>
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsPage;

