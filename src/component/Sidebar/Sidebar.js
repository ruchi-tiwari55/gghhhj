import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = (props) => {
  const [customerDropdownVisible, setCustomerDropdownVisible] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleCustomerDropdown = () => {
    setCustomerDropdownVisible(!customerDropdownVisible);
  };

  const toggleUserDropdown = () => {
    setUserDropdownVisible(!userDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 

    navigate('/'); 
    props.logout()
  };

  return (
    <div className='sidebar-container'>
      <ul className='nav flex-column p-0 m-0'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            <span className='fs-5'>Dashboard</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='Addcategory' className='nav-link'>
            <span className='fs-5'>Add Category</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='CustomerAds' className='nav-link'>
            <span className='fs-5'>Customer Ads</span>
          </Link>
        </li>

        <li className='nav-item'>
          <button
            className='nav-link'
            onClick={toggleCustomerDropdown}
          >
            <span className='fs-5'>Customers</span>
            <i
              className={`bi bi-chevron-${customerDropdownVisible ? 'up' : 'down'}`}
              style={{ fontSize: '1.2rem', marginLeft: 'auto' }}
            ></i>
          </button>
          {customerDropdownVisible && (
            <ul className='submenu'>
              <li>
                <Link to='customers' className='submenu-link'>Total Customers</Link>
              </li>
              <li>
                <Link to='VerifiedCustomers' className='submenu-link'>Verified Customers</Link>
              </li>
              <li>
                <Link to='NonverifiedCustomers' className='submenu-link'>Non-Verified Customers</Link>
              </li>
            </ul>
          )}
        </li>

        <li className='nav-item'>
          <button
            className='nav-link'
            onClick={toggleUserDropdown}
          >
            <span className='fs-5'>Users</span>
            <i
              className={`bi bi-chevron-${userDropdownVisible ? 'up' : 'down'}`}
              style={{ fontSize: '1.2rem', marginLeft: 'auto' }}
            ></i>
          </button>
          {userDropdownVisible && (
            <ul className='submenu'>
              <li>
                <Link to='addusers' className='submenu-link'>Add Users</Link>
              </li>
              <li>
                <Link to='viewusers' className='submenu-link'>View Users</Link>
              </li>
              </ul>
          )}
        </li>

        <li className='nav-item'>
          <Link to='contactlist' className='nav-link'>
            <span className='fs-5'>Contact List</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='response' className='nav-link'>
            <span className='fs-5'>Response</span>
          </Link>
        </li>

        <li className='nav-item'>
          <a
            // href='#'
            className='nav-link'
            onClick={handleLogout} 
          >
            <span className='fs-5'>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;