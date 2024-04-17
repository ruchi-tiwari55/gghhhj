import React, { useState } from 'react';

function UserForm() {
  const [userData, setUserData] = useState({
    name: '',
    mobile: '',
    email: '',
    entryDate: '',
    lzyCrazyId: '',
    password: '',
    dob: '',
    address: '',
    otpCount: 0,
    isVerified: false,
  });
  const [users, setUsers] = useState([
    { name: 'John Doe', mobile: '1234567890', email: 'john@example.com', entryDate: '2024-04-17', lzyCrazyId: 'john123', password: 'password123', dob: '1990-01-01', address: '123 Main St', otpCount: 2, isVerified: true },
    { name: 'Jane Smith', mobile: '9876543210', email: 'jane@example.com', entryDate: '2024-04-18', lzyCrazyId: 'jane456', password: 'pass456', dob: '1995-05-05', address: '456 Elm St', otpCount: 1, isVerified: false },
    { name: 'Alice Johnson', mobile: '5551234567', email: 'alice@example.com', entryDate: '2024-04-19', lzyCrazyId: 'alice789', password: 'alicepass', dob: '1985-12-15', address: '789 Oak St', otpCount: 0, isVerified: true },
    { name: 'Bob Williams', mobile: '5559876543', email: 'bob@example.com', entryDate: '2024-04-20', lzyCrazyId: 'bob987', password: 'bobpassword', dob: '1978-08-25', address: '987 Pine St', otpCount: 3, isVerified: false },
    { name: 'Ella Davis', mobile: '5557890123', email: 'ella@example.com', entryDate: '2024-04-21', lzyCrazyId: 'ella321', password: 'ellapass', dob: '1998-03-10', address: '321 Cedar St', otpCount: 1, isVerified: true }, 
    // Add more example data if needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users to display per page

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.filter(user => {
    const values = Object.values(user).join(' ').toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  }).slice(indexOfFirstUser, indexOfLastUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, userData]);
    setUserData({ name: '', mobile: '', email: '', entryDate: '', lzyCrazyId: '', password: '', dob: '', address: '', otpCount: 0, isVerified: false });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', textTransform: 'uppercase' }}>Non Verified Customers</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>S.No.</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Mobile No.</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Entry Date</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>LzyCrazy Id</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Password</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>D.O.B</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Address</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>OTP Count</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Is Verified</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.mobile}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.entryDate}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.lzyCrazyId}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.password}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.dob}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.address}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.otpCount}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.isVerified ? 'Yes' : 'No'}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {/* Add action buttons here */}
                <button style={{ padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Action</button>
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
