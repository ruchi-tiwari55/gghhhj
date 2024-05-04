import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

function ProductDescription() {
  const [formData, setFormData] = useState({
    selectCategory: "",
    addProductName: "",
    avatar: null,
    addTitle: "",
    addDescription: "",
  });

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    const newValue = type === "file" ? files[0] || null : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formToSend = new FormData();
    formToSend.append("SelectCategory", formData.selectCategory);
    formToSend.append("AddProductName", formData.addProductName);
    formToSend.append("AddTitle", formData.addTitle);
    formToSend.append("AddDescription", formData.addDescription);
    if (formData.avatar) {
      formToSend.append("Avatar", formData.avatar);
    }

    try {
      const response = await fetch(
        "https://lzycrazy-backend.onrender.com/api/admins/create-category",
        {
          method: "POST",
          body: formToSend,
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  const [users, setUsers] = useState([
    {
      selectCategory: "Category A",
      addProductName: "Product 1",
      avatar: "",
      addTitle: "Title 1",
      addDescription: "Description 1",
    },
    {
      selectCategory: "Category B",
      addProductName: "Product 2",
      avatar: "",
      addTitle: "Title 2",
      addDescription: "Description 2",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = users
    .filter((user) => {
      const values = Object.values(user).join(" ").toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: "100%" }}>
      <div className="form-container with-navbar-gap">
        <div className="heading-card">
          <FontAwesomeIcon icon={faBoxOpen} className="heading-icon" />
          <h2>Add Product</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form"
          style={{ width: "100%" }}
        >
          {/* <div className="form-group">
            <label htmlFor="selectCategory">Select Category:</label>
            <select
              id="selectCategory"
              name="selectCategory"
              value={formData.selectCategory}
              onChange={handleInputChange}
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
              <option value="Category C">Category C</option>
              <option value="Category D">Category D</option>
            </select>
          </div> */}

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

          <div className="form-group">
            <label htmlFor="addProductName">Add Product Name:</label>
            <input
              type="text"
              id="addProductName"
              name="addProductName"
              value={formData.addProductName}
              onChange={handleInputChange}
              required
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

          <div className="form-group">
            <label htmlFor="addTitle">Add Title:</label>
            <input
              type="text"
              id="addTitle"
              name="addTitle"
              value={formData.addTitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="addDescription">Add Description:</label>
            <input
              type="text"
              id="addDescription"
              name="addDescription"
              value={formData.addDescription}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group submit-group">
            <button type="submit" className="submi-btn">
              Submit
            </button>
          </div>
        </form>

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
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              marginBottom: "20px",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              width: "100%",
            }}
          />

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category Name</th>
                <th>Product Name</th>
                <th>Icon</th>
                <th>Title</th>
                <th>Description</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1 + (currentPage - 1) * usersPerPage}</td>
                  <td>{user.selectCategory}</td>
                  <td>{user.addProductName}</td>
                  <td>{user.avatar ? "Icon Present" : "No Icon"}</td>
                  <td>{user.addTitle}</td>
                  <td>{user.addDescription}</td>
                  {/* <td>
                  <button
                    style={{
                      padding: '5px 10px',
                      borderRadius: '3px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Action
                  </button>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {usersPerPage < users.length && (
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {Array.from(
                  { length: Math.ceil(users.length / usersPerPage) },
                  (_, i) => (
                    <li key={i}>
                      <button
                        onClick={() => paginate(i + 1)}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "3px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {i + 1}
                      </button>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
