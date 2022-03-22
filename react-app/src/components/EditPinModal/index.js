import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import EditForm from './EditForm'
import './EditModal.css'


function EditPinModal({ pin, user }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div onClick={() => setShowModal(true)} id="editPinEllpisis"> <i className="fa-solid fa-ellipsis"></i></div>

            {
                showModal && (

                    <Modal onClose={() => setShowModal(false)}>
                        {/* <EditForm pin={pin} setShowModal={setShowModal} user={user} pin_boards={pin_boards} /> */}
                        <EditForm pin={pin} setShowModal={setShowModal} user={user} />

                    </Modal>
                )
            }

        </>
    );
}

export default EditPinModal;