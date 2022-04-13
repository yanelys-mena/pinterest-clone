import './LandingPage.css';
import { useRef, useState } from 'react';
import { useSelector, } from 'react-redux';
import { Modal } from '../../context/Modal'
import LoginForm from '../LoginModal/LoginForm'
import { Redirect } from 'react-router-dom';



export default function LandingPage() {
    const pins = useSelector(state => Object.values(state?.pins));
    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.session?.user);
    const scrollRef = useRef(null)

    if (user) {
        return <Redirect to='/' />
    }

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
        setShowModal(true)
    }

    window.onscroll = function () {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            setShowModal(true)
        } else {
            setShowModal(false)
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * (4 - 1) + 1);
    }

    return (
        <div id="landingPage">
            <div id="top">
                <div id='topwelcome' className='fadeIn'>Get your next </div>
                <div id='topwelcome2' className='fadeIn'>look outfit</div>
                <div id="landing_grid">
                    <div id="white" ></div>
                    {pins.map((pin, idx) =>
                        <>
                            {idx < 40 &&
                                <div key={idx}>
                                    {getRandomInt(3) === 3 ? <img src={pin.image} style={{ animationDelay: '3s' }} key={pin?.id} alt={pin?.title} ></img>
                                        : (getRandomInt(3) === 2 ? <img src={pin.image} style={{ animationDelay: '2s' }} key={pin?.id} alt={pin?.title} ></img>
                                            : (getRandomInt(2) === 1 ? <img src={pin.image} style={{ animationDelay: '1s' }} key={pin?.id} alt={pin?.title} ></img> : ''))}
                                </div>}
                        </>
                    )}
                </div>
            </div>
            <button onClick={scrollToBottom} id="landing_arrow" > <i className="fa-solid fa-angle-down "></i></button >
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginForm setShowModal={setShowModal} />
                    </Modal>
                )
            }
            <div ref={scrollRef}></div>
        </div >
    )
}