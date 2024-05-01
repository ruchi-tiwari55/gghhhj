import React, { useState } from 'react';
import './Addcategory.css';

function FormPage() {
  const [formData, setFormData] = useState({
    Categoryname: '', 
    avater: null,     
  });

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    const newValue = type === 'file' ? (files[0] || null) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const formToSend = new FormData();
    formToSend.append('Categoryname', formData.Categoryname); 
    if (formData.avater) {
      formToSend.append('avater', formData.avater); 
    }

    try {
      const response = await fetch('https://lzycrazy-backend.onrender.com/api/admins/create-category', {
        method: 'POST',
        body: formToSend,
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Categories</h2>
      <form onSubmit={handleSubmit} className="form">
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
          <label htmlFor="avater">Avatar:</label> 
          <input
            type="file"
            id="avater"
            name="avater" 
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;























// import React, { useState } from 'react';
// import './Addcategory.css'; 

// function FormPage() {
//   const [formData, setFormData] = useState({
//     categoryName: '',
//     avatar: null,
//   });

//   const handleInputChange = (event) => {
//     const { name, value, type, files } = event.target;
//     let newValue = type === 'file' ? (files[0] || null) : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Categories</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <label htmlFor="categoryName">Category Name:</label>
//           <input
//             type="text"
//             id="categoryName"
//             name="categoryName"
//             value={formData.categoryName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="avatar">Avatar:</label>
//           <input
//             type="file"
//             id="avatar"
//             name="avatar"
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default FormPage;
