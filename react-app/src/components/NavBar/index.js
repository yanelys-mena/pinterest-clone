
import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';

const NavBar = () => {
  const user = useSelector((state) => state?.session);

  return (
    <nav>
      <div id="navBarDiv">
        <div id="leftNav">
          <div id="logoDiv"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"></img></div>

          <div id="homeButtonDiv">
            <NavLink to='/' exact={true} activeClassName='active'><button id="homeButton">Home</button></NavLink>
          </div>
        </div>
        <div id="searchNav">
          <SearchBar />
        </div>

        <div id="rightNav">
          <div className="faIcons">
            <NavLink to="#"><i className="fa-solid fa-bell"> </i></NavLink>
          </div>
          <div className="faIcons">
            <NavLink to="#"><i class="fa-solid fa-comment-dots"></i></NavLink>
          </div>
          <div className="faIcons">
            <NavLink to="#"><i className="fas fa-user-circle"></i></NavLink>

          </div>
          <div id="accoutIcon">
            {user && <AccountMenu user={user} />}
          </div>
        </div>
        {!user &&
          <>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </>
        }
      </div>
    </nav >
  );
}

export default NavBar;
