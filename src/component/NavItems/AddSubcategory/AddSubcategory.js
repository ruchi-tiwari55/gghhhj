import React, { useState } from 'react';
// import './Addcategory.css';

function AddSubcategory() {
  const [formData, setFormData] = useState({
    Categoryname: '',
    Subcategoryname: '',
    sequence: '',
    avatar: null,
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
    formToSend.append('sequence', formData.sequence);
    if (formData.avatar) {
      formToSend.append('avatar', formData.avatar);
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
      <h2>Add Sub-Categories</h2>
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
          <label htmlFor="Subcategoryname">Sub-Category Name:</label>
          <input
            type="text"
            id="Subcategoryname"
            name="Subcategoryname"
            value={formData.Subcategoryname}
            onChange={handleInputChange}
            required
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
          <label htmlFor="avatar">Add Image:</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddSubcategory;






