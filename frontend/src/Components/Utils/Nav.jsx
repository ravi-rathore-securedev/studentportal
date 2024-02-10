import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook
import '../Styles/Nav.css';

export const Nav = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  const handleGoBack = () => {
    navigate(-1);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div className='navhead'>
      <img className="nav-header" src={'/src/assets/aithimg.png'} alt="logo" />

      <div className="nav-bar">
        {/* Navigation items for desktop */}
        <div className="desktop-nav">
          <div className='nav-left'>
          <Link to="/home" className='linkstyle'>
            <h1 className='bar-item'>Home</h1>
          </Link>
          <Link to="/about" className='linkstyle'>
            <h1 className='bar-item'>About Us</h1>
          </Link>
          <Link to="/contact" className='linkstyle'>
            <h1 className='bar-item'>Contact Us</h1>
          </Link>
          <h1 className='bar-item' onClick={handleGoBack}>Back</h1>
          </div>
          <div className='Nav-right'>
          <Link to="/" className='linkstylex'>
            <h1 className='bar-item'>Log Out</h1>
          </Link>
          </div>
        </div>
        {/* End of desktop navigation */}

        {/* Dropdown menu for mobile */}
        <div className="mobile-nav">
          <div className="dropdown">
            <h1 className='bar-item' onClick={handleGoBack}>Back</h1>
            <Link to="/home" className='linkstyle-mob'>
                  <h1>Home</h1>
                </Link>
            <h1 className='bar-item' onClick={toggleDropdown}>Menu</h1>
            {showDropdown && (
              <div className="dropdown-content">
                
                <Link to="/about" className='linkstyle'>
                  <h1>About Us</h1>
                </Link>
                <Link to="/contact" className='linkstyle'>
                  <h1>Contact Us</h1>
                </Link>
                <Link to="/" className='linkstylex'>
                  <h1>Log Out</h1>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* End of mobile dropdown */}
      </div>
    </div>
  );
};
