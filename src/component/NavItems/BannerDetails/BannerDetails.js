import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./BannerDetails.css";

function App() {
  const [formData, setFormData] = useState({
    categoryName: "",
    shopCustomer: "",
    bannerName: "",
    bannerLink: "",
    avatar: null,
  });

  const [tableData, setTableData] = useState([
    {
      categoryName: "Electronics",
      shopCustomer: "Customer A",
      bannerName: "New Year Sale",
      bannerLink: "https://example.com/new-year-sale",
      avatar: "path/to/image1.png",
    },
    {
      categoryName: "Books",
      shopCustomer: "Customer B",
      bannerName: "Book Week",
      bannerLink: "https://example.com/book-week",
      avatar: "path/to/image2.png",
    },
  ]);

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    const newValue = type === "file" ? files[0] || null : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEntry = {
      categoryName: formData.categoryName,
      shopCustomer: formData.shopCustomer,
      bannerName: formData.bannerName,
      bannerLink: formData.bannerLink,
      avatar: formData.avatar ? formData.avatar.name : "",
    };

    setTableData([...tableData, newEntry]);

    setFormData({
      categoryName: "",
      shopCustomer: "",
      bannerName: "",
      bannerLink: "",
      avatar: null,
    });

    console.log("Form submitted successfully!");
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Form section */}
      <div className="form-container with-navbar-gap">
        <div className="heading-card">
          <FontAwesomeIcon icon={faFolderOpen} className="heading-icon" />
          <h2>Add Shop Banners</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form"
          style={{ width: "100%" }}
        >
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
            <label htmlFor="shopCustomer">Select Shop Customer:</label>
            <input
              type="text"
              id="shopCustomer"
              name="shopCustomer"
              value={formData.shopCustomer}
              onChange={handleInputChange}
              required
            />
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
            <label htmlFor="bannerLink">Add Banner Link:</label>
            <input
              type="text"
              id="bannerLink"
              name="bannerLink"
              value={formData.bannerLink}
              onChange={handleInputChange}
              required
            />
          </div>

          <div class="form-group">
            <label htmlFor="avatar">Add Banner Image:</label>
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
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Shop Customer</th>
                <th>Banner Name</th>
                <th>Banner Link</th>
                <th>Banner Image</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, user, index) => (
                <tr key={index}>
                  <td>{row.categoryName}</td>
                  <td>{row.shopCustomer}</td>
                  <td>{row.bannerName}</td>
                  <td>
                    <a href={row.bannerLink} target="_blank" rel="noreferrer">
                      {row.bannerLink}
                    </a>
                  </td>
                  <td>
                    {row.avatar ? (
                      <img
                        src={row.avatar}
                        alt={`Banner for ${row.bannerName}`}
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
                      onClick={() =>
                        console.log("Edit clicked for", user.categoryname)
                      }
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

export default App;
