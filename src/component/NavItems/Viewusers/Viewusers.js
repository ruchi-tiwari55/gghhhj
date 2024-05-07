import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function UserForm() {
  const [userData, setUserData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    country: '',
    city: '',
    password: ''
  });
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    axios.get('https://lzycrazy-tracking-backend.onrender.com/v1/users/list')
      .then(response => {
        if (response.data && response.data.user) {
          setUsers(response.data.user); // Update to use response.data.user
        } else {
          console.error('Invalid response data:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = Array.isArray(users) ? users.slice(indexOfFirstUser, indexOfLastUser) : [];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, userData]);
    setUserData({ firstName: '', phoneNumber: '', email: '', password: '', country: '', city: '' });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', textTransform: 'uppercase' }}>View Users</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>S.No.</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Mobile No.</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Password</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>State</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>City</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Edit</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{index + 1 + (currentPage - 1) * usersPerPage}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.firstName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.phoneNumber}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.password}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.country}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.city}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ cursor: 'pointer', color: '#007bff', marginRight: '10px' }}
                  onClick={() => console.log('Edit clicked for', user.firstName, user.lastName)}
                />
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ cursor: 'pointer', color: '#ff4c4c' }}
                  onClick={() => console.log('Delete clicked for', user.firstName, user.lastName)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {usersPerPage < users.length && (
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
            {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
              <li key={i} style={{ marginRight: '10px' }}>
                <button onClick={() => paginate(i + 1)} style={{ padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>{i + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserForm;
