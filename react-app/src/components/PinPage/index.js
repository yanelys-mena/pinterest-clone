import { useSelector } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import './PinPage.css'

export default function PinPage() {
    const { pinId } = useParams();
    const history = useHistory();

    const pin = useSelector(state => state?.pins[pinId])
    const user = useSelector(state => state?.session?.user)

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
                        <button id="pinSaveBtn">Save</button>
                    </div>
                    <div id="pinPageInfo">
                        <div id="link"><Link to={pin?.link} target="_blank">{pin?.link.substring(0, 50)}... </Link></div>
                        <div>{pin.title}</div>
                        <div id="description">{pin?.description}</div>
                        <div id="userInfo">
                            <div id="userPhoto"><img src={user?.photo} alt='userPhoto'></img></div>
                            <div>{user?.username}</div>
                            <div>followbutton</div>
                        </div>
                    </div>
                    <div id="comments">
                        <div>{pin?.comments.map(comment => <div>{comment?.content}</div>)}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}