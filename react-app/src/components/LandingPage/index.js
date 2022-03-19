import './LandingPage.css';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import PinGrid from '../PinGrid'

import LandingPageGrid from './LandingPageGrid';
import LoginForm from '../auth/LoginForm'

export default function LandingPage() {
    const pins = useSelector(state => Object.values(state?.pins));
    const [showLogin, setShowLogin] = useState(false)

    const scrollRef = useRef(null)

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
        setShowLogin(true)
    }

    return (
        <div id="landingPage">
            <div id="top">
                <PinGrid pins={pins} />
            </div>


            <button onClick={scrollToBottom} id="landing_arrow" > <i className="fa-solid fa-angle-down "></i></button >

            <div id="loginSection">
                {showLogin && <LoginForm />}

            </div>
            <div ref={scrollRef}>hello</div>
        </div >
    )
}