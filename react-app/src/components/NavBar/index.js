
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { Modal } from '../../context/Modal'
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';
// import LoginModal from '../LoginModal/LoginForm';
import MyLinks from '../MyLinks';
import SignUpForm from '../LoginModal/SignUpForm'
import LoginForm from '../LoginModal/LoginForm'

const NavBar = () => {
  const user = useSelector((state) => state?.session.user);
  const [showModal, setShowModal] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [page, setPage] = useState(0)


  const showSignInModal = () => {
    setPage(1)
    setShowModal(true)
    return () => {
      setShowModal(false)
    }
  }


  const showSignUpModal = () => {
    setPage(2)
    setShowModal(true)
    return () => {
      setShowModal(false)
    }
  }


  return (
    <nav className='nav'>

      <div id="navBarDiv">
        <div id="leftNav">
          <div id="logoDiv"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt='logo'></img></div>

          <div id="homeButtonDiv">
            <NavLink to='/' exact={true} className='active'><button id="homeButton">Home</button></NavLink>
          </div>
        </div>


        {user && <div id="searchNav">
          <SearchBar />
        </div>}


        <div id="rightNav">
          {user &&
            <div id="bell" onClick={() => setShowLinks(true)} >
              <i className="fa-solid fa-bell"></i>
            </div>}
          {user &&
            <div id="pin_builder_plus">
              <NavLink to="/pinbuilder"> <i className="fa-solid fa-circle-plus"></i>
              </NavLink>
            </div>}
          {user && <div className="">
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
              <div id="login_nav_button" onClick={showSignInModal} className='active'> Log in </div>
              <div id="signup_nav_button" onClick={showSignUpModal} className='active'>Sign Up</div>
            </>
          }
        </div>

        {/* {showSignIn && <LoginForm setShowSignIn={setShowSignIn} />} */}
        {/* {showSignIn && <SignUpForm setShowSignIn={setshowSignIn} />}
        {showSignUp && <SignUpForm setShowSignUp={setShowSignUp} />} */}


        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {page === 1 && <>
              {<LoginForm setShowModal={setShowModal} />}
            </>}
            {page === 2 && <>
              {<SignUpForm setShowModal={setShowModal} />}
            </>}
          </Modal>
        )}

        {/* {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginModal setShowModal={setShowModal} showModal={showModal} fromSignUp={fromSignUp} />
          </Modal>
        )} */}

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
