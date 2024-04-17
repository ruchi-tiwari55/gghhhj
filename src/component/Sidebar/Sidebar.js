import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerDropdownVisible: false,
      userDropdownVisible: false // Renamed to userDropdownVisible
    };
    this.toggleCustomerDropdown = this.toggleCustomerDropdown.bind(this);
    this.toggleUserDropdown = this.toggleUserDropdown.bind(this); // Added this line
  }

  toggleCustomerDropdown() {
    this.setState((prevState) => ({
      customerDropdownVisible: !prevState.customerDropdownVisible
    }));
  }

  toggleUserDropdown() { // Added this method
    this.setState((prevState) => ({
      userDropdownVisible: !prevState.userDropdownVisible
    }));
  }

  render() {
    const { customerDropdownVisible, userDropdownVisible } = this.state; // Added userDropdownVisible

    return (
      <div className='sidebar-container'>
        {/* Navigation links */}
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

          {/* Customers dropdown */}
          <li className='nav-item'>
            <button className='nav-link' onClick={this.toggleCustomerDropdown}>
              <span className='fs-5'>Customers</span>
              <i className={`bi bi-chevron-${customerDropdownVisible ? 'up' : 'down'}`} style={{ fontSize: '1.2rem', marginLeft: 'auto' }}></i>
            </button>
            {customerDropdownVisible && (
              <ul className='submenu'>
                <li>
                  <Link to='customers' className='submenu-link'>Total Customers</Link>
                </li>
                <li>
                  <Link to='VerifeidCustomers' className='submenu-link'>Verified Customers</Link>
                </li>
                <li>
                  <Link to='NonverifeidCustomers' className='submenu-link'>Non Verified Customers</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Users dropdown */}
          <li className='nav-item'>
            <button className='nav-link' onClick={this.toggleUserDropdown}>
              <span className='fs-5'>Users</span>
              <i className={`bi bi-chevron-${userDropdownVisible ? 'up' : 'down'}`} style={{ fontSize: '1.2rem', marginLeft: 'auto' }}></i>
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
            <Link to='response' className='nav-link'>
              <span className='fs-5'>Response</span>
            </Link>
          </li>
          <li className='nav-item'>
            <a href='' className='nav-link'>
              <span className='fs-5'>About</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;




// import React, { Component } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Link } from 'react-router-dom';
// import './Sidebar.css'; 

// class Sidebar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarHeight: window.innerHeight
//     };
//     this.handleResize = this.handleResize.bind(this);
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.handleResize);
//     this.setSidebarHeight(); // Set sidebar height initially
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }

//   handleResize() {
//     this.setSidebarHeight(); // Update sidebar height on window resize
//   }

//   setSidebarHeight() {
//     const contentHeight = document.body.scrollHeight;
//     const windowHeight = window.innerHeight;
//     const sidebarHeight = Math.max(contentHeight, windowHeight);
//     this.setState({ sidebarHeight });
//   }

//   render() {
//     const { sidebarHeight } = this.state;

//     return (
//       <div className='sidebar-container' style={{ height: `${sidebarHeight}px` }}>
//         {/* Navigation links */}
//         <ul className='nav flex-column p-0 m-0'>
//           <li className='nav-item'>
//             <Link to='/' className='nav-link'>
//               <span className='fs-5'>Dashboard</span>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='Addcategory' className='nav-link'>
//               <span className='fs-5'>Add Category</span>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='postads' className='nav-link'>
//               <span className='fs-5'>Post Ads</span>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='addusers' className='nav-link'>
//               <span className='fs-5'>Add Users</span>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='viewusers' className='nav-link'>
//               <span className='fs-5'>View Users</span>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='customers' className='nav-link'>
//               <span className='fs-5'>Customers</span>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='response' className='nav-link'>
//               <span className='fs-5'>Response</span>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <a href='' className='nav-link'>
//               <span className='fs-5'>About</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Sidebar;
