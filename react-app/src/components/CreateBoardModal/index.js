import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import BoardForm from './BoardForm'


import './CreateBoardModal.css'

function CreateBoardModal() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            {/* <div id="createBoardDiv" onClick={() => setShowModal(true)}>
                < div id="createBoardPlus">
                    <i className="fa-solid fa-plus"></i></div>
                <div> Create Board</div> */}
            <div onClick={() => setShowModal(true)}><i className="fa-solid fa-circle-plus"></i></div>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <BoardForm />
                    </Modal>
                )
            }
            {/* </div> */}
        </>
    );
}

export default CreateBoardModal;