
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { Modal } from '../../context/Modal'
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';
import LoginModal from '../LoginModal';


const NavBar = () => {
  const user = useSelector((state) => state?.session.user);
  const [showModal, setShowModal] = useState(false);


  return (
    <nav>

      <div id="navBarDiv">
        <div id="leftNav">
          <div id="logoDiv"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt='logo'></img></div>

          <div id="homeButtonDiv">
            <NavLink to='/' exact={true} activeClassName='active'><button id="homeButton">Home</button></NavLink>
          </div>
        </div>

        {user &&
          <div div id="searchNav">
            <SearchBar />
          </div>}

        <div id="rightNav">
          {user &&
            <div className="faIcons">
              <NavLink to="#"><i className="fa-solid fa-bell"> </i></NavLink>
            </div>}
          {user &&
            <div className="faIcons">
              <NavLink to="/pinbuilder"> <i className="fa-solid fa-circle-plus"></i>
              </NavLink>
            </div>}
          {user && <div className="faIcons">
            <NavLink to={`/profile/${user?.id}`}>
              {user?.photo ? <img id="navUserPhoto" src={user.photo} alt='userphoto'></img> : <i className="fas fa-user-circle"></i>}</NavLink>
          </div>}
          {user &&
            <div id="accoutIcon" >
              {user && <AccountMenu user={user} />}
            </div>
          }
          {!user &&
            <>
              <div id="login_nav_button" onClick={() => setShowModal(true)}>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>
              </div>
              <div id="signup_nav_button" onClick={() => setShowModal(true)}>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  Sign Up
                </NavLink>
              </div>
            </>
          }
        </div>


        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginModal />
          </Modal>
        )}
      </div>


    </nav >
  );
}

export default NavBar;
