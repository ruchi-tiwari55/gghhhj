// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = (props) => {
//   const [customerDropdownVisible, setCustomerDropdownVisible] = useState(false);
//   const [userDropdownVisible, setUserDropdownVisible] = useState(false);
//   const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);

//   const navigate = useNavigate();

//   const toggleCustomerDropdown = () => {
//     setCustomerDropdownVisible(!customerDropdownVisible);
//   };

//   const toggleUserDropdown = () => {
//     setUserDropdownVisible(!userDropdownVisible);
//   };

//   const toggleCategoryDropdown = () => {
//     setCategoryDropdownVisible(!categoryDropdownVisible);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");

//     navigate("/");
//     props.logout();
//   };

//   return (
//     <div className="sidebar-container">
//       <ul className="nav flex-column p-0 m-0">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             <span className="fs-5">Dashboard</span>
//           </Link>
//         </li>
//         {/* <li className='nav-item'>
//           <Link to='Addcategory' className='nav-link'>
//             <span className='fs-5'>Add Category</span>
//           </Link>
//         </li>
//         <li className='nav-item'>
//           <Link to='AddSubcategory' className='nav-link'>
//             <span className='fs-5'>Add Sub-category</span>
//           </Link>
//         </li> */}

//         <li className="nav-item">
//           <button className="nav-link" onClick={toggleCategoryDropdown}>
//             <span className="fs-5">Category</span>
//             <i
//               className={`bi bi-chevron-${categoryDropdownVisible ? "up" : "down"}`}
//               style={{ fontSize: "1.2rem", marginLeft: "auto" }}
//             ></i>
//           </button>
//           {categoryDropdownVisible && (
//             <ul className="submenu">
//               <li>
//                 <Link to="Addcategory" className="submenu-link">
//                 Add Category
//                 </Link>
//               </li>
//               <li>
//                 <Link to="AddSubcategory" className="submenu-link">
//                 Add Sub-category
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="nav-item">
//           <Link to="ProductDescription" className="nav-link">
//             <span className="fs-5">Product Description</span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="AddShopusers" className="nav-link">
//             <span className="fs-5">Add Shop Users</span>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="BannerDetails" className="nav-link">
//             <span className="fs-5">Banner Details</span>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="CustomerAds" className="nav-link">
//             <span className="fs-5">Customer Ads</span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <button className="nav-link" onClick={toggleCustomerDropdown}>
//             <span className="fs-5">Customers</span>
//             <i
//               className={`bi bi-chevron-${
//                 customerDropdownVisible ? "up" : "down"
//               }`}
//               style={{ fontSize: "1.2rem", marginLeft: "auto" }}
//             ></i>
//           </button>
//           {customerDropdownVisible && (
//             <ul className="submenu">
//               <li>
//                 <Link to="customers" className="submenu-link">
//                   Total Customers
//                 </Link>
//               </li>
//               <li>
//                 <Link to="VerifiedCustomers" className="submenu-link">
//                   Verified Customers
//                 </Link>
//               </li>
//               <li>
//                 <Link to="NonverifiedCustomers" className="submenu-link">
//                   Non-Verified Customers
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="nav-item">
//           <button className="nav-link" onClick={toggleUserDropdown}>
//             <span className="fs-5">Users</span>
//             <i
//               className={`bi bi-chevron-${userDropdownVisible ? "up" : "down"}`}
//               style={{ fontSize: "1.2rem", marginLeft: "auto" }}
//             ></i>
//           </button>
//           {userDropdownVisible && (
//             <ul className="submenu">
//               <li>
//                 <Link to="addusers" className="submenu-link">
//                   Add Users
//                 </Link>
//               </li>
//               <li>
//                 <Link to="viewusers" className="submenu-link">
//                   View Users
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="nav-item">
//           <Link to="contactlist" className="nav-link">
//             <span className="fs-5">Contact List</span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="response" className="nav-link">
//             <span className="fs-5">Response</span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <a
//             // href='#'
//             className="nav-link"
//             onClick={handleLogout}
//           >
//             <span className="fs-5">Logout</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [customerDropdownVisible, setCustomerDropdownVisible] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const toggleCustomerDropdown = () => {
    setCustomerDropdownVisible(!customerDropdownVisible);
  };

  const toggleUserDropdown = () => {
    setUserDropdownVisible(!userDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!categoryDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    props.logout();
  };

  return (
    <div className="sidebar-container">
      <ul className="nav flex-column p-0 m-0">
        {/* Dashboard */}
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-tachometer-alt"></i> {/* Dashboard Icon */}
            <span className="fs-5">Dashboard</span>
          </Link>
        </li>

        {/* Category Dropdown */}
        <li className="nav-item">
          <button className="nav-link" onClick={toggleCategoryDropdown}>
            <i className="fas fa-folder"></i> {/* Folder Icon */}
            <span className="fs-5">Category</span>
            <i
              className={`fas fa-chevron-${categoryDropdownVisible ? "up" : "down"}`}
              style={{ fontSize: "1.2rem", marginLeft: "auto" }}
            ></i>
          </button>
          {categoryDropdownVisible && (
            <ul className="submenu">
              <li>
                <Link to="/addcategory" className="submenu-link">
                  <i className="fas fa-folder-plus"></i> {/* Add Folder Icon */}
                  Add Category
                </Link>
              </li>
              <li>
                <Link to="/addsubcategory" className="submenu-link">
                  <i className="fas fa-folder-open"></i> {/* Open Folder Icon */}
                  Add Sub-category
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Product Description */}
        <li className="nav-item">
          <Link to="/productdescription" className="nav-link">
            <i className="fas fa-info-circle"></i> {/* Info Circle Icon */}
            <span className="fs-5">Product Description</span>
          </Link>
        </li>

        {/* Add Shop Users */}
        <li className="nav-item">
          <Link to="/addshopusers" className="nav-link">
            <i className="fas fa-store"></i> {/* Store Icon */}
            <span className="fs-5">Add Shop Users</span>
          </Link>
        </li>

        {/* Banner Details */}
        <li className="nav-item">
          <Link to="/bannerdetails" className="nav-link">
            <i className="fas fa-ad"></i> {/* Ad Icon */}
            <span className="fs-5">Banner Details</span>
          </Link>
        </li>

        {/* Customer Dropdown */}
        <li className="nav-item">
          <button className="nav-link" onClick={toggleCustomerDropdown}>
            <i className="fas fa-users"></i> {/* Users Icon */}
            <span className="fs-5">Customers</span>
            <i
              className={`fas fa-chevron-${customerDropdownVisible ? "up" : "down"}`}
              style={{ fontSize: "1.2rem", marginLeft: "auto" }}
            ></i>
          </button>
          {customerDropdownVisible && (
            <ul className="submenu">
              <li>
                <Link to="/customers" className="submenu-link">
                  <i className="fas fa-user-friends"></i> {/* User Friends Icon */}
                  Total Customers
                </Link>
              </li>
              <li>
                <Link to="/verifiedcustomers" className="submenu-link">
                  <i className="fas fa-check-circle"></i> {/* Check Circle Icon */}
                  Verified Customers
                </Link>
              </li>
              <li>
                <Link to="/nonverifiedcustomers" classclass="submenu-link">
                  <i className="fas fa-times-circle"></i> {/* Times Circle Icon */}
                  Non-Verified Customers
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* User Dropdown */}
        <li className="nav-item">
          <button className="nav-link" onClick={toggleUserDropdown}>
            <i className="fas fa-user"></i> {/* User Icon */}
            <span className="fs-5">Users</span>
            <i
              className={`fas fa-chevron-${userDropdownVisible ? "up" : "down"}`}
              style={{ fontSize: "1.2rem", marginLeft: "auto" }}
            ></i>
          </button>
          {userDropdownVisible && (
            <ul className="submenu">
              <li>
                <Link to="/addusers" className="submenu-link">
                  <i className="fas fa-user-plus"></i> {/* User Plus Icon */}
                  Add Users
                </Link>
              </li>
              <li>
                <Link to="/viewusers" className="submenu-link">
                  <i className="fas fa-users"></i> {/* Users Icon */}
                  View Users
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact List */}
        <li className="nav-item">
          <Link to="/contactlist" className="nav-link">
            <i className="fas fa-address-book"></i> {/* Address Book Icon */}
            <span className="fs-5">Contact List</span>
          </Link>
        </li>

        {/* Logout */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> {/* Sign Out Icon */}
            <span className="fs-5">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
