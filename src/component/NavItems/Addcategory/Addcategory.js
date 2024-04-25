import React, { useState } from 'react';
import './Addcategory.css'; 

function FormPage() {
  const [formData, setFormData] = useState({
    categoryName: '',
    sequence: '',
    formType: '',
    active: false,
    avatar: null,
    createdAt: '',
    updatedAt: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, files, checked } = event.target;
    let newValue = type === 'file' ? (files[0] || null) : type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Add Categories</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sequence">Sequence:</label>
          <input
            type="number"
            id="sequence"
            name="sequence"
            value={formData.sequence}
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Created At:</label>
          <input
            type="datetime-local"
            id="createdAt"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="updatedAt">Updated At:</label>
          <input
            type="datetime-local"
            id="updatedAt"
            name="updatedAt"
            value={formData.updatedAt}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="active">Active:</label>
          <input
            type="checkbox"
            id="active"
            name="active"
            checked={formData.active}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
