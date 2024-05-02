import React, { useState } from 'react';
import './ProductDescription.css';

function ProductDescription() {
  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    description: '',
    sellingPrice: '',
    productImages: [],
  });

  // Define the state for the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, type, files, value } = event.target;

    if (type === 'file') {
      if (files.length + formData.productImages.length > 8) {
        setErrorMessage('You can only upload 8 images.');
        return;
      }

      setErrorMessage(''); // Clear any previous error message
      const imageFiles = Array.from(files);
      const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
      setFormData((prevData) => ({
        ...prevData,
        productImages: [...prevData.productImages, ...imageUrls],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // This will be used to set which image is selected
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Error message display */}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">--Select Category--</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home_appliances">Home Appliances</option>
            <option value="books">Books</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group small-input"> {/* Added class for smaller input */}
          <label htmlFor="sellingPrice">Selling Price (in Rs):</label>
          <input
            type="number"
            id="sellingPrice"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="product-images-container">
          <label htmlFor="productImages">Upload up to 8 images:</label>
          <input
            type="file"
            id="productImages"
            name="productImages"
            multiple
            accept="image/*"
            onChange={handleInputChange}
          />

          <div className="image-grid">
            {formData.productImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Product ${index}`}
                className="preview-image"
                onClick={() => handleImageClick(imageUrl)}
              />
            ))}
          </div>
        </div>

        <div className="form-group gap-above-submit">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>

      {/* Modal to display selected image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Selected"
              className="enlarged-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDescription;












// import React, { useState } from 'react';
// import './ProductDescription.css';

// function ProductDescription() {
//   const [formData, setFormData] = useState({
//     category: '',
//     productName: '',
//     description: '',
//     sellingPrice: '',
//     productImages: [],
//   });

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleInputChange = (event) => {
//     const { name, type, files, value } = event.target;

//     if (type === 'file') {
//       const imageFiles = Array.from(files);
//       const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
//       setFormData((prevData) => ({
//         ...prevData,
//         productImages: imageUrls,
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl); // Set the image for modal
//   };

//   const closeModal = () => {
//     setSelectedImage(null); // Close the modal
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <label htmlFor="category">Select Category:</label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="">--Select Category--</option>
//             <option value="electronics">Electronics</option>
//             <option value="fashion">Fashion</option>
//             <option value="home_appliances">Home Appliances</option>
//             <option value="books">Books</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="productName">Product Name:</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={formData.productName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="sellingPrice">Selling Price (in Rs):</label>
//           <input
//             type="number"
//             id="sellingPrice"
//             name="sellingPrice"
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="product-images-container">
//           <label htmlFor="productImages">Upload up to 8 images:</label>
//           <input
//             type="file"
//             id="productImages"
//             name="productImages"
//             multiple
//             accept="image/*"
//             onChange={handleInputChange}
//           />

//           <div className="image-previews">
//             {formData.productImages.map((imageUrl, index) => (
//               <img
//                 key={index}
//                 src={imageUrl}
//                 alt={`Product ${index}`}
//                 className="preview-image"
//                 onClick={() => handleImageClick(imageUrl)}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="form-group gap-above-submit">
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Modal for enlarged image */}
//       {selectedImage && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close-button" onClick={closeModal}>&times;</span>
//             <img
//               src={selectedImage}
//               alt="Enlarged"
//               className="enlarged-image"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductDescription;









// import React, { useState } from 'react';
// import './ProductDescription.css';

// function ProductDescription() {
//   const [formData, setFormData] = useState({
//     category: '',
//     productName: '',
//     description: '',
//     sellingPrice: '',
//     productImages: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, type, files, value } = event.target;

//     if (type === 'file') {
//       const imageFiles = Array.from(files);
//       const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
//       setFormData((prevData) => ({
//         ...prevData,
//         productImages: imageUrls,
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     formData.productImages.forEach((url) => URL.revokeObjectURL(url)); // Clean up memory
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <label htmlFor="category">Select Category:</label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="">--Select Category--</option>
//             <option value="electronics">Electronics</option>
//             <option value="fashion">Fashion</option>
//             <option value="home_appliances">Home Appliances</option>
//             <option value="books">Books</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="productName">Product Name:</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={formData.productName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="sellingPrice">Selling Price (in Rs):</label>
//           <input
//             type="number"
//             id="sellingPrice"
//             name="sellingPrice"
//             value={formData.sellingPrice}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="product-images-container">
//           <label htmlFor="productImages">Upload up to 8 images:</label>
//           <input
//             type="file"
//             id="productImages"
//             name="productImages"
//             multiple
//             accept="image/*"
//             onChange={handleInputChange}
//           />
//           {/* Display Image Previews */}
//           <div className="image-previews">
//             {formData.productImages.map((imageUrl, index) => (
//               <img key={index} src={imageUrl} alt={`Product ${index}`} className="preview-image" />
//             ))}
//           </div>
//         </div>

//         <div className="form-group gap-above-submit">
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ProductDescription;
