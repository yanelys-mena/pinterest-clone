
import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
// import CreateBoardModal from '../CreateBoardModal'; 
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';

const NavBar = () => {
  const user = useSelector((state) => state?.session.user);
  // console.log(user.photo)
  return (
    <nav>
      <div id="navBarDiv">
        <div id="leftNav">
          <div id="logoDiv"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt='logo'></img></div>

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
            <NavLink to="/pinbuilder"> <i className="fa-solid fa-circle-plus"></i>
            </NavLink>
          </div>
          <div className="faIcons">
            <NavLink to={`/profile/${user?.username.toLowerCase()}`}>
              {user ? <img id="navUserPhoto" src={user.photo} alt='userphoto'></img> : <i className="fas fa-user-circle"></i>}</NavLink>


          </div>
          <div id="accoutIcon" >
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
