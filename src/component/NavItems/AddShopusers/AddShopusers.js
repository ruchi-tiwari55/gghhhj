import React, { useState } from 'react';
import './AddShopUserForm.css'; 

function AddShopUserForm() {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    shopLogo: null,
    mobileNo: '',
    email: '',
    password: '',
    gstNo: '',
    tagLine: '',
    country: '',
    state: '',
    city: '',
    area: '',
    aboutUs: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === 'file' ? (files[0] || null) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Add Shop Users</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="shopLogo">Shop Logo:</label>
          <input
            type="file"
            id="shopLogo"
            name="shopLogo"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No.:</label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        {/* <h4>Shop Details</h4> */}
        <div className="heading-container">
      <hr className="heading-line" /> {/* Horizontal line */}
      <h4 className="centered-heading">Shop Details</h4>
    </div>
    <br/>
        <div className="form-group">
          <label htmlFor="gstNo">GST No.:</label>
          <input
            type="text"
            id="gstNo"
            name="gstNo"
            value={formData.gstNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tagLine">Tag Line:</label>
          <input
            type="text"
            id="tagLine"
            name="tagLine"
            value={formData.tagLine}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="aboutUs">About Us:</label>
          <textarea
            id="aboutUs"
            name="aboutUs"
            value={formData.aboutUs}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddShopUserForm;
