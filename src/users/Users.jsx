import React, { useEffect, useState } from 'react';
import './user.css';
import { getUsers } from '../services/api'; 

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUsers();  
        setUsers(response.data);  
      } catch (err) {
        setError('Failed to fetch user details.');
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
              <th>Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.createdon}</td> 
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
