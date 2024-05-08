import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./AddSubcategory.css";
import { toast } from "react-toastify";

function AddSubcategory() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    selectCategory: "",
    addSubCategory: "",
    addSequence: "",
    addFormType: "",
    avatar: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://lzycrazy-tracking-backend.onrender.com/categories/getAll"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        console.log("Fetched categories:", responseData);
        if (responseData && responseData.length > 0) {
          setCategories(responseData);
        } else {
          throw new Error("No categories found");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;
    const newValue = type === "file" ? files[0] || null : value;
    setFormData({ ...formData, [name]: newValue });

    if (name === "avatar" && files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { selectCategory, addSubCategory, addSequence, addFormType, avatar } = formData;

    const requestBody = JSON.stringify({
      "category": selectCategory,
      "subCategoryName": addSubCategory,
      "addSequence": parseInt(addSequence),
      "formType": addFormType,
      "addIcon": "https://example.com/image.jpg"
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: requestBody,
      redirect: 'follow'
    };

    try {
      const response = await fetch(
        "https://lzycrazy-tracking-backend.onrender.com/subcategories/add",
        requestOptions
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Subcategory added successfully:", result);
        toast.success("Subcategory added successfully!", {
          position: "top-right",
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        
        // Perform any additional actions upon successful submission
        // For example, updating the list of subcategories
      } else {
        console.error("Failed to add subcategory.");
      }
    } catch (error) {
      console.error("An error occurred during subcategory addition:", error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="form-container with-navbar-gap">
        <div className="heading-card">
          <FontAwesomeIcon icon={faFolderOpen} className="heading-icon" />
          <h2>Add Subcategories</h2>
        </div>
        <form onSubmit={handleSubmit} className="form" style={{ width: "100%" }}>
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
              {categories.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.categoryName}
                </option>
              ))}
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
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                />
              </div>
            )}
          </div>

          <div className="form-group submit-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSubcategory;
