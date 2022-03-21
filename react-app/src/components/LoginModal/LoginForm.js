import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = ({ setPage, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    setShowModal(false)
    if (data) {
      setErrors(data);
    }
  };


  const demoLogin = async (e) => {
    e.preventDefault();

    const demo_email = 'demo@demo.com';
    const demo_password = 'password';
    const data = await dispatch(login(demo_email, demo_password));
    setShowModal(false)

    if (data) {
      setErrors(data);
    }
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="loginFormModal">
      <div id="login_logo"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt='logo'></img></div>
      <div id="welcome">Welcome to Pinterest</div>
      <div id="dev_links">
        <div id="dev_about">
          <div>A project by</div>
          <div>Yanelys Mena</div>
        </div>
        <div id="dev_icons">
          <a href="https://github.com/yanelys-mena/pinterest-clone" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/yanelysmena/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>


      <div id="login_formDiv">
        <form onSubmit={onLogin} id="loginForm">
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button type='submit' id="login_button">Log in</button>

        </form>
        <button onClick={demoLogin} id="demo_button">Demo Login</button>
        <div id='login_terms'>By continuing, you agree to Pinterest's <span className="bolded_words">Terms of Service</span> and acknowledge you've read our <span className="bolded_words">Privacy Policy</span></div>
        <div onClick={() => setPage(2)} id='switch_page'>Not on Pinterest yet? Sign up</div>

      </div>


    </div>
  );
};

export default LoginForm;
