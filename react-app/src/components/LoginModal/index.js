import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'


const LoginModal = () => {
    const user = useSelector(state => state.session.user);
    const [page, setPage] = useState(1)

    return (
        <>
            {page === 1 && <LoginForm setPage={setPage} page={page} />}
            {page === 2 && <SignUpForm setPage={setPage} page={page} />}
        </>
    );
};

export default LoginModal;
