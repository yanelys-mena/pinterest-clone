import './LandingPage.css';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { Modal } from '../../context/Modal'
import PinGrid from '../PinGrid'
import LoginModal from '../LoginModal'

export default function LandingPage() {
    const pins = useSelector(state => Object.values(state?.pins));
    const [showModal, setShowModal] = useState(false);


    const scrollRef = useRef(null)

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
        setShowModal(true)
    }

    return (
        <div id="landingPage">
            <div id="top">
                <PinGrid pins={pins} />
            </div>


            <button onClick={scrollToBottom} id="landing_arrow" > <i className="fa-solid fa-angle-down "></i></button >

            <div id="loginSection">
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginModal />
                    </Modal>
                )}

            </div>
            <div ref={scrollRef}>hello</div>
        </div >
    )
}