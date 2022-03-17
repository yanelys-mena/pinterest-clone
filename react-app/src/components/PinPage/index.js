import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import EditPinModal from '../EditPinModal';
import './PinPage.css'

export default function PinPage() {
    const { pinId } = useParams();
    const history = useHistory();

    const pin = useSelector(state => state?.pins[pinId])
    const user = useSelector(state => state?.session?.user)

    const [showComments, setShowComments] = useState(true)


    return (
        <div id="pinPage">

            <div id='pinPageArrow' >
                <div onClick={history.goBack} id="arrowClick"><i className="fa-solid fa-arrow-left"></i></div>
            </div>
            <div id="pinContent">
                <div id="pinContentLeft">
                    <img src={pin?.image} id="pinPageImage" alt='pin'></img>
                </div>
                <div id="pinContentRight">
                    <div id="pinPageHeader">
                        <EditPinModal pin={pin} user={user} />
                        <button id="pinSaveBtn">Save</button>
                    </div>
                    <div id="pinPageInfo">
                        <div id="link">
                            {pin?.link ? <Link to={pin?.link} target="_blank">{pin?.link.substring(0, 50)}... </Link> : ''}

                        </div>
                        <div>{pin?.title}</div>
                        {pin?.description ?
                            <div id="description">{pin?.description} </div> : ''}
                        <div id="userInfo">
                            <div id="userPhoto"><img src={user?.photo} alt='userPhoto'></img></div>
                            <div>{user?.username}</div>
                            {/* <div>followbutton</div> */}
                        </div>
                    </div>
                    <div id="comments">
                        {!showComments && <div id="commentsHeader" >
                            <div>Comments</div>
                            <div onClick={() => setShowComments(true)}> <i className="fa-solid fa-chevron-right"></i></div>
                        </div>

                        }
                        {showComments &&
                            <>
                                <div id="commentsHeader" >
                                    <div>Comments</div>
                                    <div onClick={() => setShowComments(false)}> <i className="fa-solid fa-chevron-down"></i></div>
                                </div>
                                <div id="allComments">{pin?.comments.map(comment => <div id="indComment">{comment?.content}</div>)}</div>

                                <div id="leaveComment">
                                    <div id="commentTip">Share feedback, ask a question or give a high five
                                    </div>
                                    <div id="commentInputDiv">
                                        <div id="userPhoto_comment"><img src={user?.photo} alt='userPhoto'></img></div>
                                        <div id="formDiv">
                                            <form disabled="disabled">
                                                <input
                                                    id="commentInput"
                                                    type='text'
                                                    placeholder='Comments coming soon'
                                                ></input>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}