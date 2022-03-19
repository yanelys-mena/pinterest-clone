import './LandingPage.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector, } from 'react-redux';
import { Modal } from '../../context/Modal'
import PinGrid from '../PinGrid'
import LoginModal from '../LoginModal'

export default function LandingPage() {
    const pins = useSelector(state => Object.values(state?.pins));
    const [showModal, setShowModal] = useState(false);

    const scrollRef = useRef(null)

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    window.onscroll = function () {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            setShowModal(true)
        }
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
                        <LoginModal setShowModal={setShowModal} />
                    </Modal>
                )}

            </div>
            <div ref={scrollRef}>hello</div>
        </div >
    )
}