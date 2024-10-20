import React, { useEffect, useState } from 'react';
import './user.css';
import { getUsers } from '../services/api'; 

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); 

        if (!token) {
          setError('You are not authorized to view this page.');
          return;
        }

        const usersData = await getUsers(token);  
        setUsers(usersData);  
      } catch (err) {
        setError('Failed to fetch user details. ' + (err.response?.data?.message || err.message));
        console.error('Error fetching user data:', err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      {error && <p className="error">{error}</p>}
      {!error && users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
}

export default Users;
