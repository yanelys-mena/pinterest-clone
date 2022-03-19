import React, { useState } from 'react';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'


const LoginModal = () => {
    const [page, setPage] = useState(1)

    return (
        <>
            {page === 1 && <LoginForm setPage={setPage} page={page} />}
            {page === 2 && <SignUpForm setPage={setPage} page={page} />}
        </>
    );
};

export default LoginModal;
