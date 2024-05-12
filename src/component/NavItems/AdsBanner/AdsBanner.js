import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./AdsBanner.css";

function AdsBanner() {
  // Update the initial form data structure
  const [formData, setFormData] = useState({
    category: "",
    // select: "",
    bannerName: "",
    sequence: "",
    bannerLink: "",
    sequence: "",
    addsequence :"",
    bannerImage: null,
  });

  const [tableData, setTableData] = useState([
    {
      category: "Investor",
    //   select: "1",
      bannerName: "Tech Sale",
      sequence: 1,
      bannerLink: "https://example.com/tech-sale",
      bannerImage: "path/to/image1.png",
    },
    {
      category: "Advertising",
    //   select: "2",
      bannerName: "Book Bonanza",
      sequence: 2,
      bannerLink: "https://example.com/book-bonanza",
      bannerImage: "path/to/image2.png",
    },
  ]);

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    const newValue = type === "file" ? (files[0] || null) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEntry = {
      category: formData.category,
    //   select: formData.select,
      bannerName: formData.bannerName,
      sequence: formData.sequence,
      bannerLink: formData.bannerLink,
      bannerImage: formData.bannerImage ? formData.bannerImage.name : "",
    };

    setTableData([...tableData, newEntry]);

    // Reset form fields
    setFormData({
      category: "",
    //   select: "",
      bannerName: "",
      sequence: "",
      bannerLink: "",
      bannerImage: null,
    });

    console.log("Form submitted successfully!");
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Form section */}
      <div className="form-container with-navbar-gap">
        <div className="heading-card">
          <div className="header-product">
            <h2 className="formm"> Add Banners</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form" style={{ width: "100%" }}>
          {/* Select Category */}
          <div className="form-box">
            <label className="label-box" htmlFor="category"> Category:</label>
            
            <select className="input-box"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="MARKET">Market</option>
              <option value="Electronics">category </option>
              <option value="Books">Shop</option>
             
              {/* Add more categories as needed */}
            </select>
          </div>

           

          {/* Banner Name */}
          <div className="form-box">
            <label className="label-box" htmlFor="category">Select</label>
            
            <select className="input-box"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="MARKET">1</option>
              <option value="Electronics">2</option>
              <option value="Books">3</option>
              <option value="Books">4</option>
              <option value="Books">5</option>
              <option value="Books">6</option>
              <option value="Books">7</option>
             
              {/* Add more categories as needed */}
            </select>
          </div>


          {/* Add Sequence */}
          <div className="form-box">
            <label className="label-box" htmlFor="sequence">Banner Name</label>
            <input className="input-box"
              type="text"
              id="banner"
              name="bannerName"
              value={formData.bannerName}
              onChange={handleInputChange}
              required
            />
          </div>

             {/* banner name*/}

          <div className="form-box">
            <label className="label-box" htmlFor="sequence">Add Sequence:</label>
            <input className="input-box"
              type="number"
              id="sequence"
              name="sequence"
              value={formData.sequence}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Add Banner Link */}
          <div class="form-box">
            <label class="label-box" htmlFor="bannerLink">Add Banner Link:</label>
            <input className="input-box"
              type="text"
              id="bannerLink"
              name="bannerLink"
              value={formData.bannerLink}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Add Banner Images */}
          <div class="form-box">
            <label class="label-box" htmlFor="bannerImage">Add Banner Images:</label>
            <input className="input-box"
              type="file"
              id="bannerImage"
              name="bannerImage"
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <div class="form-group submit-group">
            <button type="submit" className="shop-submit">
              Submit
            </button>
          </div>
        </form>

        {/* Table section */}
        <div
          style={{
            width: "100%",
            margin: "20px auto",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <table style={{ width: "100%", bordercollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Banner Name</th>
                <th>Sequence</th>
                <th>Banner Link</th>
                <th>Banner Image</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.category}</td>
                  <td>{row.bannerName}</td>
                  <td>{row.sequence}</td>
                  <td>{row.bannerName}</td>
                  <td>{row.bannerImage}</td>
                  <td>
                    <a href={row.bannerLink} target="_blank" rel="noopener noreferrer">
                      {row.bannerLink}
                    </a>
                  </td>
                  <td>
                    {row.bannerImage ? (
                      <img
                        src={row.bannerImage}
                        alt={`Banner for ${row.category}`}
                        style={{ height: "40px", width: "40px" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{
                        cursor: "pointer",
                        color: "#007bff",
                        marginRight: "10px",
                      }}
                      onClick={() => console.log("Edit clicked for", row.category)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdsBanner;
