import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import './PinPage.css'

export default function PinPage() {
    const { pinId } = useParams();
    const history = useHistory();

    const pin = useSelector(state => state?.pins[pinId])
    console.log(pin)

    return (
        <div id="pinPage">
            <div id='pinPageArrow' >
                <div onClick={history.goBack} id="arrowClick"><i className="fa-solid fa-arrow-left"></i></div>
            </div>
            <div id="pinContent">
                <div id="pinContentLeft">
                    <img src={pin.image} id="pinPageImage" alt='pin'></img>
                </div>
                <div id="pinContentRight">
                    <div id="pinPageHeader">
                        drop down
                        button
                    </div>
                    <div id="pinPageInfo">
                        <div>{pin.title}</div>
                        <div>pin description</div>
                        <div id="userInfo">
                            <div>userphoto</div>
                            <div>username</div>
                            <div>followbutton</div>
                        </div>
                    </div>
                    <div id="comments">
                        <div>comments</div>
                    </div>
                </div>
            </div>
        </div >
    )
}