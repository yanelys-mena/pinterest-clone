
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { Modal } from '../../context/Modal'
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';
import LoginModal from '../LoginModal';
import MyLinks from '../MyLinks';


const NavBar = () => {
  const user = useSelector((state) => state?.session.user);
  const [showModal, setShowModal] = useState(false);
  const [showLinks, setShowLinks] = useState(false);


  return (
    <nav className='nav'>

      <div id="navBarDiv">
        <div id="leftNav">
          <div id="logoDiv"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt='logo'></img></div>

          <div id="homeButtonDiv">
            <NavLink to='/' exact={true} activeClassName='active'><button id="homeButton">Home</button></NavLink>
          </div>
        </div>


        {user && <div id="searchNav">
          <SearchBar />
        </div>}


        <div id="rightNav">
          {user &&
            <div className="faIcons" id="bell" onClick={() => setShowLinks(true)} >
              <i className="fa-solid fa-bell"></i>
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
              <div id="login_nav_button" onClick={() => setShowModal(true)} activeClassName='active'> Log in </div>
              <div id="signup_nav_button" onClick={() => setShowModal(true)} activeClassName='active'>Sign Up</div>
            </>
          }
        </div>


        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginModal setShowModal={setShowModal} showModal={showModal} />
          </Modal>
        )}

        {
          showLinks && (

            <Modal onClose={() => setShowLinks(false)}>
              <MyLinks showLinks={showLinks} setShowLinks={setShowLinks} />
            </Modal>
          )
        }

      </div>


    </nav >
  );
}

export default NavBar;
