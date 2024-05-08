import React, { useState } from 'react';
import './Addcategory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function App() {
  const [formData, setFormData] = useState({
    Categoryname: '',
    sequence: '',
    avatar: null,
    formType: '',
    avatarPreview: null, // New state to store the preview URL
  });

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    let newValue = type === 'file' ? files[0] : value;

    if (type === 'file' && files.length > 0) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: files[0],
          avatarPreview: reader.result, // Update the preview URL
        });
      };

      reader.readAsDataURL(files[0]); // Read the selected file as data URL
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { Categoryname, sequence, formType, avatar } = formData;

    if (!Categoryname || !sequence || !formType || !avatar) {
      console.error('All fields are required.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(avatar);

    reader.onload = () => {
      const base64Image = reader.result.split(',')[1];

      const rawData = {
        categoryName: Categoryname,
        addSequence: sequence,
        formType: formType,
        addIcon: '"https://example.com/image.jpg"',
      };

      fetch("https://lzycrazy-tracking-backend.onrender.com/categories/add", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rawData),
      })
        .then(response => response.text())
        .then(result => {
          console.log('Category added successfully:', result);
          toast.success("Category added successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
          // Optionally reset form fields or update state upon successful addition
          setFormData({
            Categoryname: '',
            sequence: '',
            avatar: null,
            formType: '',
            avatarPreview: null,
          });
        })
        .catch(error => console.error('Error adding category:', error));
    };

    reader.onerror = () => {
      console.error('Error reading file.');
    };
  };

  const [users, setUsers] = useState([
    {
      categoryname: 'Farm',
      subcategory: 'sub farm',
      sequence: '2',
      icon: '',
      formtype: 'A',
      shop: 'ShopS',
    },
    {
      categoryname: 'Carry',
      subcategory: 'sub carry',
      sequence: '3',
      icon: '',
      formtype: 'N',
      shop: 'No',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users
    .filter((user) => {
      const values = Object.values(user).join(' ').toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '100%' }}>
      {/* Form section */}
      <div className="form-container with-navbar-gap">
        <div className="heading-card">
          <FontAwesomeIcon icon={faFolderOpen} className="heading-icon" />
          <h2>Add Categories</h2>
        </div>
        <form onSubmit={handleSubmit} className="form" style={{ width: '100%' }}>
          <div className="form-group">
            <label htmlFor="Categoryname">Category Name:</label>
            <input
              type="text"
              id="Categoryname"
              name="Categoryname"
              value={formData.Categoryname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="formType">Form Type:</label>
            <input
              type="text"
              id="formType"
              name="formType"
              value={formData.formType}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sequence">Add Sequence:</label>
            <input
              type="text"
              id="sequence"
              name="sequence"
              value={formData.sequence}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Add Icon:</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleInputChange}
              accept="image/*" // Allow only image files
              required
            />
            {formData.avatarPreview && (
              <img
                src={formData.avatarPreview}
                alt="Uploaded icon preview"
                style={{ width: '50px', height: '50px', marginTop: '10px' }}
              />
            )}
          </div>

          <div className="form-group submit-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* User management table section */}
      <div
        style={{
          width: '100%',
          margin: '20px auto',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginBottom: '20px',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Category Name</th>
              <th>Sub Category</th>
              <th>Sequence</th>
              <th>Icon</th>
              <th>Form Type</th>
              <th>Shop</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{index + 1 + (currentPage - 1) * usersPerPage}</td>
                <td>{user.categoryname}</td>
                <td>{user.subcategory}</td>
                <td>{user.sequence}</td>
                <td>{user.icon}</td>
                <td>{user.formtype}</td>
                <td>{user.shop}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ cursor: 'pointer', color: '#007bff', marginRight: '10px' }}
                    onClick={() => console.log('Edit clicked for', user.categoryname)}
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={{ cursor: 'pointer', color: '#ff4c4c' }}
                    onClick={() => console.log('Delete clicked for', user.categoryname)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {usersPerPage < users.length && (
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '3px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
