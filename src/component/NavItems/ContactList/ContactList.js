import React, { useState, useEffect } from 'react';

function UserList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users to display per page
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://lzycrazy-backend.onrender.com/api/contacts')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users
    .filter(user => {
      const values = Object.values(user).join(' ').toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        width: '80%',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333',
          textTransform: 'uppercase',
        }}
      >
        Contact List
      </h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          marginBottom: '20px',
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          width: '100%',
        }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>S.No.</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Business Profile</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Phone</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Message</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{index + 1 + (currentPage - 1) * usersPerPage}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.businessprofile}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.phone}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.message}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <button
                  style={{
                    padding: '5px 10px',
                    borderRadius: '3px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Action
                </button>
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
                <button onClick={() => paginate(i + 1)} style={{ padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserList;
