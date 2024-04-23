import React, { useState } from 'react';

function UserForm() {
  const [userData, setUserData] = useState({
    adImage: '',
    categoryName: '',
    adName: '',
    adDescription: '',
    sellingPrice: '',
    enteredBy: '',
    disabled: false,
  });
  const [users, setUsers] = useState([
    { adImage: 'image1.jpg', categoryName: 'Electronics', adName: 'Smartphone', adDescription: 'Brand new smartphone', sellingPrice: '$500', enteredBy: 'User1', disabled: false },
    { adImage: 'image2.jpg', categoryName: 'Fashion', adName: 'Shoes', adDescription: 'Stylish shoes', sellingPrice: '$50', enteredBy: 'User2', disabled: true },
    { adImage: 'image3.jpg', categoryName: 'Electronics', adName: 'Laptop', adDescription: 'Powerful laptop', sellingPrice: '$1000', enteredBy: 'User3', disabled: false },
    { adImage: 'image4.jpg', categoryName: 'Fashion', adName: 'Dress', adDescription: 'Elegant dress', sellingPrice: '$80', enteredBy: 'User4', disabled: false },
    { adImage: 'image5.jpg', categoryName: 'Electronics', adName: 'Smartwatch', adDescription: 'Feature-rich smartwatch', sellingPrice: '$200', enteredBy: 'User5', disabled: true },
    { adImage: 'image6.jpg', categoryName: 'Fashion', adName: 'Jeans', adDescription: 'Comfortable jeans', sellingPrice: '$40', enteredBy: 'User6', disabled: false },
    { adImage: 'image7.jpg', categoryName: 'Electronics', adName: 'Tablet', adDescription: 'Sleek tablet', sellingPrice: '$300', enteredBy: 'User7', disabled: false },
    { adImage: 'image8.jpg', categoryName: 'Fashion', adName: 'T-shirt', adDescription: 'Stylish t-shirt', sellingPrice: '$20', enteredBy: 'User8', disabled: true },
    { adImage: 'image9.jpg', categoryName: 'Electronics', adName: 'Headphones', adDescription: 'Premium headphones', sellingPrice: '$150', enteredBy: 'User9', disabled: false },
    { adImage: 'image10.jpg', categoryName: 'Fashion', adName: 'Hat', adDescription: 'Trendy hat', sellingPrice: '$10', enteredBy: 'User10', disabled: true },
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
    setUserData({ adImage: '', categoryName: '', adName: '', adDescription: '', sellingPrice: '', enteredBy: '', disabled: false });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', textTransform: 'uppercase' }}>Customers Ads</h2>
      <input 
        type="text" 
        placeholder="Search by keyword" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px', width: '100%', boxSizing: 'border-box' }} 
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Ad Image</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Category Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Ad Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Ad Description</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Selling Price</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Entered by</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Disabled</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.adImage}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.categoryName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.adName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.adDescription}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.sellingPrice}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.enteredBy}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.disabled ? 'Yes' : 'No'}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {/* Action button */}
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
