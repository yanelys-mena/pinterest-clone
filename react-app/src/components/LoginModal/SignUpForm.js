import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'


const SignUpForm = ({ setPage, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onSignUp = async (e) => {
    e.preventDefault();
    // await dispatch(signUp(username, email, password, repeatPassword)).then(data => setErrors(data));
    const data = await dispatch(signUp(username, email, password, repeatPassword))

    if (data) {
      setErrors(data);
    } else {
      setShowModal(false)
      history.push('/')
      // return <Redirect to='/' />;

    }
  }


  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    // setShowModal(false)
    // return <Redirect to='/' />;
  }

  return (
    <div id="signup_modal">
      <div id="login_logo"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt='logo'></img></div>
      <div id="welcome">Welcome to Pinterest</div>
      <div>Find new ideas to try</div>


      <div id="signup_formDiv">
        <form onSubmit={onSignUp} id="signup_form">
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <input
            type='text'
            placeholder='username'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
          <input
            type='text'
            name='email'
            placeholder='email'
            onChange={updateEmail}
            value={email}
          ></input>
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={updatePassword}
            value={password}
          ></input>
          <input
            type='password'
            placeholder='confirm password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
          <button type='submit' id='signup_button'>Continue</button>
          <div id='login_terms'>By continuing, you agree to Pinterest's <span className="bolded_words">Terms of Service</span> and acknowledge you've read our <span className="bolded_words">Privacy Policy</span></div>
          <div onClick={() => setPage(1)} id='switch_page'>Already have an account? Sign in</div>
        </form>

      </div>
    </div>
  );
};

export default SignUpForm;
