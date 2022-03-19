import './Unpin.css';
import { useState } from 'react';
import { Modal } from '../../context/Modal'
import RemovePin from './RemovePin';

export default function UnpinModal({ pin }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div onClick={() => setShowModal(true)} id="editPinEllpisis"> <i className="fa-solid fa-ellipsis"></i></div>

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <RemovePin pin={pin} />
                    </Modal>
                )
            }

        </>
    )
}