import './LandingPage.css';
import { useRef, useEffect } from 'react';

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
            <ul>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
                <li><img src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg" /></li>
            </ul>
            {/* <div id='fadeIn'>
                <img src='https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg'></img>
            </div> */}
            <button onClick={scrollToBottom} id="landing_arrow"><i className="fa-solid fa-angle-down "></i></button>
            <div ref={messagesEndRef} />
        </div>
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