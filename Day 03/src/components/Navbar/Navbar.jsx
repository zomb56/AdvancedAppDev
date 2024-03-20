import React from 'react';
// import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { logout, selectUser } from '../Redux/UserSlice';
import "./Navbar.css";

function Navbar() {

//   const dispatch = useDispatch();
  const nav = useNavigate();
//   const user = useSelector(selectUser); 
//   const username = user.username;

  const handleLogout = () => {
    // dispatch(logout());
    nav('/');
  };

  return (
    <nav className='navbar'>
      <div className='left'>
      {/* <div className='navbar-logo'>
        <a href='/'><img src={CarPoll}/></a>
      </div> */}
      <ul className='nav-links'>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          <Link to="/Programs">Programs</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Feedback">Feedback</Link>
        </li>
        {/* <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Terms">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/Privacy">Privacy Policy</Link>
        </li> */}
      </ul>
      </div>
      {/* <ul className='right'>
        <li>
        <div className="actions">
        {username ? (
          <>
          <button className='link btn btn-primary' onClick={handleLogout}>
          Logout
          </button>
          <div className='hello'>Hello, {username}</div>
          </>
        )
        : (
          <>
            <button className='link btn btn-primary' onClick={handleLogout}>
                Login
            </button>
          </>
        )
      }
      </div>
      </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;