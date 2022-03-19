import './LandingPage.css';
import { useRef, useEffect } from 'react';
import LandingPageGrid from './LandingPageGrid';
import LoginForm from '../auth/LoginForm'

export default function LandingPage() {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // useEffect(() => {
    //     scrollToBottom()

    // }, []);


    return (
        <div id="landingPage">
            landing page

            <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css" rel="stylesheet" />
            <div id="topPage">   <LandingPageGrid /></div>
            <div id="bottomPage">
                <div>HEYPPP</div>
                <LoginForm />
            </div>

            <button onClick={scrollToBottom} id="landing_arrow" > <i className="fa-solid fa-angle-down "></i></button >
            <div ref={messagesEndRef} />
        </div >
    )
}

/*

const Messages = ({ messages }) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <div>
      {messages.map(message => <Message key={message.id} {...message} />)}
      <div ref={messagesEndRef} />
    </div>
  )
}
*/