import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarHeight: window.innerHeight
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setSidebarHeight(); // Set sidebar height initially
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setSidebarHeight(); // Update sidebar height on window resize
  }

  setSidebarHeight() {
    const contentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const sidebarHeight = Math.max(contentHeight, windowHeight);
    this.setState({ sidebarHeight });
  }

  render() {
    const { sidebarHeight } = this.state;

    return (
      <div className='sidebar-container' style={{ height: `${sidebarHeight}px` }}>
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
            <Link to='postads' className='nav-link'>
              <span className='fs-5'>Post Ads</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='customers' className='nav-link'>
              <span className='fs-5'>Customers</span>
            </Link>
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
