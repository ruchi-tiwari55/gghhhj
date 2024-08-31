import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
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
             
  useEffect(()=>{
    async function getData () {
      try{
    const resData = await fetch("https://lzycrazy-tracking-backend.onrender.com/ProductDesc/getall");
    const jsnData = await resData.json()
    console.log(jsnData)
      }catch (error)     { 
        console.error();
      }
    }
    getData()
    },[])
       

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
    <div style={{ width: "100%" }}>
    <div className="form-container with-navbar-gap">
      <div className="heading-card">
  <FontAwesomeIcon icon={faBoxOpen} className="heading-icon" />
  <h2>Add Shop Users</h2>
</div>
      <form onSubmit={handleSubmit} className="form">

          <div className="form-group">
            <label htmlFor="selectCategory">Select Category:</label>
            <select
              id="selectCategory"
              name="selectCategory"
              className="input-common"
              value={formData.selectCategory}
              onChange={handleInputChange}
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              <option value="category4">Category 4</option>
            </select>
          </div>
      
        <div className="form-group flex-row">
          <div>
            <label htmlFor="gstNo">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
      
          {/* <div className="form-group">
            <label htmlFor="selectCategory">Select Category:</label>
            <select
              id="selectCategory"
              name="selectCategory"
              className="input-common"
              value={formData.selectCategory}
              onChange={handleInputChange}
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              <option value="category4">Category 4</option>
            </select>
          </div> */}
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

        <div className="form-group flex-row">
          <div>
            <label htmlFor="mobileNo">Mobile No.:</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="heading-container">
          <hr className="heading-line" /> {/* Horizontal line */}
          <h4 className="centered-heading">Shop Details</h4>
        </div>

        {/* Combined GST number and tag line in one row */}
        <div className="form-group flex-row">
          <div>
            <label htmlFor="gstNo">GST No.:</label>
            <input
              type="text"
              id="gstNo"
              name="gstNo"
              value={formData.gstNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="tagLine">Tag Line:</label>
            <input
              type="text"
              id="tagLine"
              name="tagLine"
              value={formData.tagLine}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Combined location information in one row */}
        <div className="form-group flex-row">
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="area">Area:</label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="aboutUs">About Us:</label>
          <textarea
            id="aboutUs"
            name="aboutUs"
            value={formData.aboutUs}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group submit-group">
            <button type="submit" className="submi-btn">
              Submit
            </button>
          </div>
      </form>
    </div>
    </div>
  );
}

export default AddShopUserForm;






