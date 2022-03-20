import React, { useState } from 'react';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { Modal } from '../../context/Modal'


const LoginModal = ({ setShowModal }) => {

    const [page, setPage] = useState(1)


    return (
        <>
            {page === 1 && <LoginForm setPage={setPage} page={page} setShowModal={setShowModal} />}
            {page === 2 && <SignUpForm setPage={setPage} page={page} setShowModal={setShowModal} />}
        </>
    );
};

export default LoginModal;
