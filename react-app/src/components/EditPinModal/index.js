import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import EditForm from './EditForm'
import './EditModal.css'


function EditPinModal({ pin }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div onClick={() => setShowModal(true)} id="editPinEllpisis"> <i class="fa-solid fa-ellipsis"></i></div>

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditForm pin={pin} setShowModal={setShowModal} />
                    </Modal>
                )
            }

        </>
    );
}

export default EditPinModal;