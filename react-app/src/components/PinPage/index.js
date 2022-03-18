import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom';
import { add_pin_to_board } from '../../store/boards'
import EditPinModal from '../EditPinModal';
import './PinPage.css'
import Select from 'react-select'


export default function PinPage() {
    const { pinId } = useParams();
    const history = useHistory();
    const pin = useSelector(state => state?.pins[pinId])
    const user = useSelector(state => state?.session?.user)
    const boards = useSelector(state => Object.values(state?.boards))
    const [isPinned, setIsPinned] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null);
    const [selected, setSelected] = useState(false)

    const addToBoard = async (e) => {
        setSelectedOption(e)
        // console.log('test', selectedOption)
        const pinned = dispatch(add_pin_to_board(pinId, parseInt(e.value)));

        if (pinned) {
            setIsPinned('saved')
        }
    }



    const options = boards.map(board => {
        return { value: `${board?.id}`, label: `${board?.name} ${pin?.boards.includes(board?.id) ? '  - saved' : ''}` }
    })


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
                        {pin?.user?.id === user?.id ?
                            <EditPinModal pin={pin} user={user} /> : <div></div>}

                        <div id='select-pin'>
                            <div id="react-select">
                                <Select
                                    defaultValue={selectedOption}
                                    placeholder={'Select Board'}
                                    onChange={addToBoard}
                                    options={options} />
                            </div>
                            <button id="pinButton">{isPinned ? isPinned : 'Save'}</button>
                        </div>
                    </div>
                    <div id="pinPageInfo">
                        <div>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div id="link">
                            {pin?.link ? <Link to={pin?.link} target="_blank">{pin?.link.substring(0, 50)}... </Link> : ''}

                        </div>
                        <div>{pin?.title}</div>
                        {pin?.description ?
                            <div id="description">{pin?.description} </div> : ''}
                        <div id="userInfo">
                            <Link to={`/profile/${pin?.user?.id}`} style={{ textDecoration: 'none' }} target="_blank">
                                <div id="userPhoto"><img src={pin?.user?.photo} alt='userPhoto'></img></div>
                                <div>{pin?.user?.username}</div>
                            </Link>
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