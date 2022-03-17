import React, { useState } from 'react';
import { Modal } from '../context/Modal'
import BoardForm from './BoardForm'
import './CreateBoardModal.css'

function CreateBoardModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Add Board</button>
            <div onClick={() => setShowModal(true)} > Create Board</div>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <BoardForm />

                    </Modal>
                )
            }
        </>
    );
}

export default CreateBoardModal;