import './LandingPage.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector, } from 'react-redux';
import { Modal } from '../../context/Modal'
import PinGrid from '../PinGrid'
import LoginModal from '../LoginModal'
import boardsReducer from '../../store/boards';

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

    function getRandomInt(max) {
        return Math.floor(Math.random() * (4 - 1) + 1);
    }



    return (
        <div id="landingPage">
            <div id="top">
                {/* <PinGrid pins={pins} /> */}
                <div id='topwelcome'>Get your next </div>
                <div id='topwelcome2'>look outfit</div>
                <div id="landing_grid">
                    {pins.map(pin =>
                        <>
                            {getRandomInt(3) === 1 ? <img src={pin.image} style={{ animationDelay: '1s' }}></img>
                                : (getRandomInt(3) === 2 ? <img src={pin.image} style={{ animationDelay: '2s' }}></img>
                                    : (getRandomInt(3) === 3 ? <img src={pin.image} style={{ animationDelay: '3s' }}></img> : ''))}

                        </>

                    )}

                </div>
            </div>


            <button onClick={scrollToBottom} id="landing_arrow" > <i className="fa-solid fa-angle-down "></i></button >

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginModal setShowModal={setShowModal} />
                    </Modal>
                )
            }

            <div ref={scrollRef}></div>
        </div >
    )
}