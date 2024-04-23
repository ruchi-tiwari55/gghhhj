import React, { useState } from 'react';

function UserForm() {
  const [userData, setUserData] = useState({
    name: '',
    mobile: '',
    email: '',
    entryDate: '',
    lzyCrazyId: '',
    dob: '',
    address: '',
    otpCount: 0,
    isVerified: false,
  });
  const [users, setUsers] = useState([
    { name: 'John Doe', mobile: '1234567890', email: 'john@example.com', entryDate: '2024-04-17', lzyCrazyId: 'john123', dob: '1990-01-01', address: '123 Main St', otpCount: 2, isVerified: true },
    { name: 'Jane Smith', mobile: '9876543210', email: 'jane@example.com', entryDate: '2024-04-18', lzyCrazyId: 'jane456', dob: '1995-05-05', address: '456 Elm St', otpCount: 1, isVerified: false },
    { name: 'John Doe', mobile: '1234567890', email: 'john@example.com', entryDate: '2024-04-17', lzyCrazyId: 'john123', dob: '1990-01-01', address: '123 Main St', otpCount: 2, isVerified: true },
  { name: 'Jane Smith', mobile: '9876543210', email: 'jane@example.com', entryDate: '2024-04-18', lzyCrazyId: 'jane456', dob: '1995-05-05', address: '456 Elm St', otpCount: 1, isVerified: false },
  { name: 'Alice Johnson', mobile: '5551234567', email: 'alice@example.com', entryDate: '2024-04-19', lzyCrazyId: 'alice789', dob: '1988-10-15', address: '789 Oak St', otpCount: 0, isVerified: true },
  { name: 'Bob Williams', mobile: '5559876543', email: 'bob@example.com', entryDate: '2024-04-20', lzyCrazyId: 'bob987', dob: '1979-08-25', address: '987 Pine St', otpCount: 3, isVerified: false },
  { name: 'Ella Davis', mobile: '5557890123', email: 'ella@example.com', entryDate: '2024-04-21', lzyCrazyId: 'ella321', dob: '1993-03-10', address: '321 Cedar St', otpCount: 1, isVerified: true },
  { name: 'Michael Brown', mobile: '5555678901', email: 'michael@example.com', entryDate: '2024-04-22', lzyCrazyId: 'michael123', dob: '1982-05-20', address: '567 Maple St', otpCount: 2, isVerified: false },
  { name: 'Emily Wilson', mobile: '5553456789', email: 'emily@example.com', entryDate: '2024-04-23', lzyCrazyId: 'emily456', dob: '1997-09-12', address: '345 Birch St', otpCount: 0, isVerified: true },
  { name: 'William Lee', mobile: '5552345678', email: 'william@example.com', entryDate: '2024-04-24', lzyCrazyId: 'william789', dob: '1975-12-30', address: '234 Oak St', otpCount: 1, isVerified: false },
  { name: 'Sophia Martinez', mobile: '5557890123', email: 'sophia@example.com', entryDate: '2024-04-25', lzyCrazyId: 'sophia321', dob: '1991-06-18', address: '789 Cedar St', otpCount: 3, isVerified: true },
  { name: 'Daniel Taylor', mobile: '5556789012', email: 'daniel@example.com', entryDate: '2024-04-26', lzyCrazyId: 'daniel567', dob: '1987-04-05', address: '678 Pine St', otpCount: 0, isVerified: false },
  { name: 'Olivia Clark', mobile: '5554567890', email: 'olivia@example.com', entryDate: '2024-04-27', lzyCrazyId: 'olivia123', dob: '1984-11-22', address: '456 Maple St', otpCount: 2, isVerified: true },
  { name: 'Matthew Rodriguez', mobile: '5553456789', email: 'matthew@example.com', entryDate: '2024-04-28', lzyCrazyId: 'matthew456', dob: '1976-08-15', address: '345 Birch St', otpCount: 1, isVerified: false },
  { name: 'Isabella Lewis', mobile: '5552345678', email: 'isabella@example.com', entryDate: '2024-04-29', lzyCrazyId: 'isabella789', dob: '1994-02-28', address: '234 Oak St', otpCount: 0, isVerified: true },
  { name: 'Alexander Lee', mobile: '5550123456', email: 'alexander@example.com', entryDate: '2024-04-30', lzyCrazyId: 'alexander123', dob: '1989-07-07', address: '012 Main St', otpCount: 3, isVerified: false },
  { name: 'Mia Hall', mobile: '5557890123', email: 'mia@example.com', entryDate: '2024-05-01', lzyCrazyId: 'mia321', dob: '1998-10-10', address: '789 Elm St', otpCount: 2, isVerified: true },
  { name: 'Lucas Walker', mobile: '5556789012', email: 'lucas@example.com', entryDate: '2024-05-02', lzyCrazyId: 'lucas567', dob: '1983-03-25', address: '678 Pine St', otpCount: 1, isVerified: false },
  { name: 'Charlotte Perez', mobile: '5554567890', email: 'charlotte@example.com', entryDate: '2024-05-03', lzyCrazyId: 'charlotte123', dob: '1997-12-05', address: '456 Maple St', otpCount: 0, isVerified: true },
  { name: 'Benjamin Gonzalez', mobile: '5552345678', email: 'benjamin@example.com', entryDate: '2024-05-04', lzyCrazyId: 'benjamin789', dob: '1980-09-20', address: '234 Oak St', otpCount: 3, isVerified: false },
  { name: 'Amelia Carter', mobile: '5550123456', email: 'amelia@example.com', entryDate: '2024-05-05', lzyCrazyId: 'amelia123', dob: '1992-04-15', address: '012 Main St', otpCount: 2, isVerified: true },
  { name: 'Henry Wright', mobile: '5557890123', email: 'henry@example.com', entryDate: '2024-05-06', lzyCrazyId: 'henry321', dob: '1979-11-28', address: '789 Elm St', otpCount: 1, isVerified: false },
  { name: 'Evelyn Perez', mobile: '5556789012', email: 'evelyn@example.com', entryDate: '2024-05-07', lzyCrazyId: 'evelyn567', dob: '1996-06-05', address: '678 Pine St', otpCount: 0, isVerified: true },
  { name: 'Sebastian Hall', mobile: '5554567890', email: 'sebastian@example.com', entryDate: '2024-05-08', lzyCrazyId: 'sebastian123', dob: '1985-03-17', address: '456 Maple St', otpCount: 3, isVerified: false },
  { name: 'Avery Gonzalez', mobile: '5552345678', email: 'avery@example.com', entryDate: '2024-05-09', lzyCrazyId: 'avery789', dob: '1993-08-22', address: '234 Oak St', otpCount: 2, isVerified: true },
  { name: 'Scarlett Rodriguez', mobile: '5550123456', email: 'scarlett@example.com', entryDate: '2024-05-10', lzyCrazyId: 'scarlett123', dob: '1988-05-30', address: '012 Main St', otpCount: 1, isVerified: false },
  { name: 'James Smith', mobile: '5557890123', email: 'james@example.com', entryDate: '2024-05-11', lzyCrazyId: 'james321', dob: '1977-12-12', address: '789 Elm St', otpCount: 0, isVerified: true }
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
    setUserData({ name: '', mobile: '', email: '', entryDate: '', lzyCrazyId: '', dob: '', address: '', otpCount: 0, isVerified: false });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', textTransform: 'uppercase' }}>Verified Customers</h2>
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
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Mobile No.</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Entry Date</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>LzyCrazy Id</th>
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
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{index + 1 + (currentPage - 1) * usersPerPage}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.mobile}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.entryDate}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.lzyCrazyId}</td>
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
