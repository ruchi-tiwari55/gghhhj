import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./AddSubcategory.css";

function AddSubcategory() {
  const [formData, setFormData] = useState({
    selectCategory: "",
    addSubCategory: "",
    addSequence: "",
    addFormType: "",
    avatar: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    const newValue = type === "file" ? files[0] || null : value;
    setFormData({ ...formData, [name]: newValue });

    // Update image preview for the "avatar" field
    if (name === "avatar" && files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formToSend = new FormData();
    formToSend.append("SelectCategory", formData.selectCategory);
    formToSend.append("AddSubCategory", formData.addSubCategory);
    formToSend.append("AddSequence", formData.addSequence);
    formToSend.append("AddFormType", formData.addFormType);
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
      selectCategory: "Farm",
      addSubCategory: "Sub Farm",
      addSequence: "2",
      addFormType: "Type 1",
      avatar: "",
      shop: "Shop category",
      isVerified: true,
    },
    {
      selectCategory: "Carry",
      addSubCategory: "Sub Carry",
      addSequence: "3",
      addFormType: "Type 2",
      avatar: "",
      shop: "No",
      isVerified: false,
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
          <FontAwesomeIcon icon={faFolderOpen} className="heading-icon" />
          <h2>Add Subcategories</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form"
          style={{ width: "100%" }}
        >
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
            <label htmlFor="addSubCategory">Add Sub Category:</label>
            <input
              type="text"
              id="addSubCategory"
              name="addSubCategory"
              value={formData.addSubCategory}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="addSequence">Add Sequence:</label>
            <input
              type="text"
              id="addSequence"
              name="addSequence"
              value={formData.addSequence}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="addFormType">Add Form Type:</label>
            <input
              type="text"
              id="addFormType"
              name="addFormType"
              value={formData.addFormType}
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
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" style={{ maxHeight: "100px", maxWidth: "100px" }} />
              </div>
            )}
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
              boxSizing: "border-box",
            }}
          />

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Select Category</th>
                <th>Add Sub Category</th>
                <th>Add Sequence</th>
                <th>Add Icon</th>
                <th>Add Form Type</th>
                <th>Shop</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1 + (currentPage - 1) * usersPerPage}</td>
                  <td>{user.selectCategory}</td>
                  <td>{user.addSubCategory}</td>
                  <td>{user.addSequence}</td>
                  <td>{user.avatar}</td>
                  <td>{user.addFormType}</td>
                  <td>{user.shop}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{
                        cursor: "pointer",
                        color: "#007bff",
                        marginRight: "10px",
                      }}
                      onClick={() => console.log("Edit clicked for", user.addSubCategory)}
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      style={{ cursor: "pointer", color: "#ff4c4c" }}
                      onClick={() => console.log("Delete clicked for", user.addSubCategory)}
                    />
                  </td>
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

export default AddSubcategory;
