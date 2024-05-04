import React, { useState } from 'react';
import './Addcategory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [formData, setFormData] = useState({
    Categoryname: '',
    sequence: '',
    avatar: null,
    formType: '',
  });

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    const newValue = type === 'file' ? (files[0] || null) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formToSend = new FormData();
    formToSend.append('Categoryname', formData.Categoryname);
    formToSend.append('sequence', formData.sequence);
    formToSend.append('formType', formData.formType);
    if (formData.avatar) {
      formToSend.append('avatar', formData.avatar);
    }

    try {
      const response = await fetch(
        'https://lzycrazy-backend.onrender.com/api/admins/create-category',
        {
          method: 'POST',
          body: formToSend,
        }
      );

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  // User table section
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
            />
          </div>

          <div className="form-group submit-group">
            <button type="submit" className="submi-btn">
              Submit
            </button>
          </div>
        </form>
      

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
    </div>
  );
}

export default App;














// import React, { useState } from 'react';
// import './Addcategory.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'; // Changed the icon to a folder-related one

// function FormPage() {
//   const [formData, setFormData] = useState({
//     Categoryname: '',
//     sequence: '',
//     avatar: null,
//     formType: '', // Added new field for form type
//   });

//   const handleInputChange = (event) => {
//     const { name, type, value, files } = event.target;
//     const newValue = type === 'file' ? (files[0] || null) : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formToSend = new FormData();
//     formToSend.append('Categoryname', formData.Categoryname);
//     formToSend.append('sequence', formData.sequence);
//     formToSend.append('formType', formData.formType); // Appending the new field
//     if (formData.avatar) {
//       formToSend.append('avatar', formData.avatar);
//     }

//     try {
//       const response = await fetch('https://lzycrazy-backend.onrender.com/api/admins/create-category', {
//         method: 'POST',
//         body: formToSend,
//       });

//       if (response.ok) {
//         console.log('Form submitted successfully!');
//       } else {
//         console.error('Form submission failed.');
//       }
//     } catch (error) {
//       console.error('An error occurred during form submission:', error);
//     }
//   };

//   return (
//     <div className="form-container with-navbar-gap">
//       <div className="heading-card">
//         <FontAwesomeIcon icon={faFolderOpen} className="heading-icon" />
//         <h2>Add Categories</h2>
//       </div>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <label htmlFor="Categoryname">Category Name:</label>
//           <input
//             type="text"
//             id="Categoryname"
//             name="Categoryname"
//             value={formData.Categoryname}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="formType">Form Type:</label>
//           <input
//             type="text"
//             id="formType"
//             name="formType"
//             value={formData.formType}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="sequence">Add Sequence:</label>
//           <input
//             type
//             id="sequence"
//             name="sequence"
//             value={formData.sequence}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="avatar">Add Icon:</label>
//           <input
//             type="file"
//             id="avatar"
//             name="avatar"
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group submit-group"> {/* Add a container for the submit button */}
//           <button type="submit" className="submi-btn" style={{}}>Submit</button> {/* Changed the submit button width */}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default FormPage;


// import React, { useState } from 'react';
// import './Addcategory.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// function App() {
//   const [formData, setFormData] = useState({
//     Categoryname: '',
//     sequence: '',
//     avatar: null,
//     formType: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, type, value, files } = event.target;
//     const newValue = type === 'file' ? (files[0] || null) : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formToSend = new FormData();
//     formToSend.append('Categoryname', formData.Categoryname);
//     formToSend.append('sequence', formData.sequence);
//     formToSend.append('formType', formData.formType);
//     if (formData.avatar) {
//       formToSend.append('avatar', formData.avatar);
//     }

//     try {
//       const response = await fetch(
//         'https://lzycrazy-backend.onrender.com/api/admins/create-category',
//         {
//           method: 'POST',
//           body: formToSend,
//         }
//       );

//       if (response.ok) {
//         console.log('Form submitted successfully!');
//       } else {
//         console.error('Form submission failed.');
//       }
//     } catch (error) {
//       console.error('An error occurred during form submission:', error);
//     }
//   };

//   // User table section
//   const [users, setUsers] = useState([
//     {
//       categoryname: 'Farm',
//       subcategory: 'sub farm',
//       sequence: '2',
//       icon: '',
//       formtype: 'A',
//       shop: 'ShopS',
//       isVerified: true,
//     },
//     {
//       categoryname: 'carry',
//       subcategory: 'sub carry',
//       sequence: '3',
//       icon: '',
//       formtype: 'N',
//       shop: 'No',
//       isVerified: false,
//     },
  
  
//     // Add more sample users if needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(5);

//   // Pagination logic
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users
//     .filter((user) => {
//       const values = Object.values(user).join(' ').toLowerCase();
//       return values.includes(searchTerm.toLowerCase());
//     })
//     .slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='' style={{width:"100%"}}>
//       {/* Form section */}
//       <div className="form-container with-navbar-gap">
//         <div className="heading-card">
//           <FontAwesomeIcon icon={faFolderOpen} className="heading-icon" />
//           <h2>Add Categories</h2>
//         </div>
//         <form onSubmit={handleSubmit} className="form" style={{width:"100%"}}> 
//           <div className="form-group">
//             <label htmlFor="Categoryname">Category Name:</label>
//             <input
//               type="text"
//               id="Categoryname"
//               name="Categoryname"
//               value={formData.Categoryname}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="formType">Form Type:</label>
//             <input
//               type="text"
//               id="formType"
//               name="formType"
//               value={formData.formType}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="sequence">Add Sequence:</label>
//             <input
//               type="text"
//               id="sequence"
//               name="sequence"
//               value={formData.sequence}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="avatar">Add Icon:</label>
//             <input
//               type="file"
//               id="avatar"
//               name="avatar"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group submit-group">
//             <button type="submit" className="submi-btn">
//               Submit
//             </button>
//           </div>
//         </form>
      

//       {/* User management table section */}
//       <div
//         style={{
//           width: '100%',
//           margin: '20px auto',
//           padding: '20px',
//           backgroundColor: '#f9f9f9',
//           borderRadius: '5px',
//           boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         }}
//       >
      
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             marginBottom: '20px',
//             padding: '8px',
//             borderRadius: '5px',
//             border: '1px solid #ddd',
//             width: '100%',
//             boxSizing: 'border-box',
//           }}
//         />
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th>S.No.</th>
//               <th>Category Name</th>
//               <th>Sub Category</th>
//               <th>Sequence</th>
//               <th>Icon</th>
//               <th>Form Type</th>
//               <th>Shop</th>
//               {/* <th>Is Verified</th> */}
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1 + (currentPage - 1) * usersPerPage}</td>
//                 <td>{user.categoryname}</td>
//                 <td>{user.subcategory}</td>
//                 <td>{user.sequence}</td>
//                 <td>{user.icon}</td>
//                 <td>{user.formtype}</td>
//                 <td>{user.shop}</td>
                
                
//                 {/* <td>{user.isVerified ? 'Yes' : 'No'}</td> */}
//                 <td>
//                   <button 
//                     style={{
//                       padding: '5px 10px',
//                       borderRadius: '3px',
//                       backgroundColor: '#007bff',
//                       color: '#fff',
//                       border: 'none',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div style={{ textAlign: 'center', marginTop: '20px' }}>
//           {usersPerPage < users.length && (
//             <ul
//               style={{
//                 listStyle: 'none',
//                 padding: 0,
//                 display: 'flex',
//                 justifyContent: 'center',
//               }}
//             >
//               {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
//                 <li key={i}>
//                   <button
//                     onClick={() => paginate(i + 1)}
//                     style={{
//                       padding: '5px 10px',
//                       borderRadius: '3px',
//                       backgroundColor: '#007bff',
//                       color: '#fff',
//                       border: 'none',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     {i + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default App;
