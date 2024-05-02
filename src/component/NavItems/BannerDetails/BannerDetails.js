import React, { useState } from 'react';
import './BannerDetails.css'; 

function BannerDetails() {
  const [formData, setFormData] = useState({
    shopCustomer: '',
    bannerName: '',
    sequence: '',
    bannerLink: '',
    bannerImage: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === 'file' ? (files[0] || null) : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container with-navbar-gap">
      <h2>Add Banner Details</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="shopCustomer">
            Select Shop Customer <span style={{ color: 'red' }}>*</span>:
          </label>
          <select
            id="shopCustomer"
            name="shopCustomer"
            value={formData.shopCustomer}
            onChange={handleInputChange}
            required
          >
            <option value="">--Select Shop Customer--</option>
            <option value="customer1">Customer 1</option>
            <option value="customer2">Customer 2</option>
            <option value="customer3">Customer 3</option>
            <option value="customer4">Customer 4</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bannerName">Banner Name:</label>
          <input
            type="text"
            id="bannerName"
            name="bannerName"
            value={formData.bannerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sequence">Add Sequence:</label>
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
          <label htmlFor="bannerLink">Add Banner Link:</label>
          <input
            type="url"
            id="bannerLink"
            name="bannerLink"
            value={formData.bannerLink}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bannerImage">Add Banner Image:</label>
          <input
            type="file"
            id="bannerImage"
            name="bannerImage"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BannerDetails;
