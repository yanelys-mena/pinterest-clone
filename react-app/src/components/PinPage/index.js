import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom';
import { add_pin_to_board } from '../../store/boards'
import EditPinModal from '../EditPinModal';
import './PinPage.css'
import Select from 'react-select'
import UnpinModal from '../UnpinModal';
import { load_pins } from '../../store/pins';
import CommentForm from './CommentForm';
import { load_comments } from '../../store/comments';
import CommentEditForm from './CommentEditForm'
import { Modal } from '../../context/Modal'



export default function PinPage() {
    const { pinId } = useParams();
    const history = useHistory();
    const pin = useSelector(state => state?.pins[pinId])
    const comments = useSelector(state => Object.values(state?.comments))
    const user = useSelector(state => state?.session?.user)
    const boards = useSelector(state => Object.values(state?.boards))
    const [isPinned, setIsPinned] = useState('')
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedComment, setSelectedComment] = useState('')

    useEffect(() => {
        dispatch(load_comments(pinId))
    }, [pinId])


    const addToBoard = async (e) => {
        setSelectedOption(e)
        const pinned = await dispatch(add_pin_to_board(pinId, parseInt(e.value))).then((d) => dispatch(load_pins()))
        if (pinned) {
            setIsPinned('saved')
        }
    }

    const getClickableLink = (link) => {
        return link.startsWith("http://") || link.startsWith("https://") ?
            link
            : `http://${link}`;
    }

    let options;


    options = boards.map(board => {
        return { value: `${board?.id}`, label: `${board?.name} ${pin?.boards.includes(board?.id) ? '  - saved' : ''}` }
    })


    const editCommentModal = (comment) => {
        setSelectedComment(comment)
        setShowModal(true)

    }


    return (
        <>
            {pin?.title &&
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
                                    <EditPinModal pin={pin} user={user} /> : <UnpinModal pin={pin} />}

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
                                <div id="link">
                                    {pin?.link ? <a href={getClickableLink(pin?.link)} target="_blank" rel="noreferrer">{pin?.link.substring(0, 50)}... </a> : ''}

                                </div>
                                <div id="pin_title">{pin?.title}</div>
                                {pin?.description ?
                                    <div id="description">{pin?.description} </div> : ''}
                                <div id="userInfo">
                                    <Link to={`/profile/${pin?.user?.id}`} style={{ textDecoration: 'none' }} target="_blank">
                                        <div id="userPhoto">
                                            {pin?.user?.photo ? <img src={pin?.user?.photo} alt='userPhoto'></img>
                                                : <i style={{ fontSize: '50px' }} className="fas fa-user-circle bigger-profile"></i>}
                                        </div>
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
                                        <div id="allComments">{comments.map(comment =>
                                            <div id="indComment" key={comment.id}>
                                                <>
                                                    <div id="comment_photo">
                                                        {comment?.user_photo ? <img id="comments_photo" src={comment?.user_photo} alt={`${comment.username}comment`}></img> : <i style={{ fontSize: '50px' }} className="fas fa-user-circle bigger-profile"></i>}
                                                    </div>

                                                    <div id="comment_right">
                                                        <div id="comment_content">
                                                            <span><Link
                                                                to={`/profile/${comment?.user_id}`} id="comment_username"
                                                                rel="no_referrer"
                                                                target="_blank"
                                                            >{comment?.username}
                                                            </Link>

                                                                {comment?.content}</span>
                                                        </div>
                                                        {user?.id === comment?.user_id &&
                                                            <div id="comment_icons">
                                                                <button onClick={() => editCommentModal(comment)}>edit</button>
                                                            </div>
                                                        }
                                                    </div>
                                                </>
                                            </div>)}

                                        </div>

                                        <CommentForm user={user} pinId={pinId} />
                                    </>
                                }

                            </div>

                            {
                                showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <CommentEditForm setShowModal={setShowModal} comment={selectedComment} />
                                    </Modal>
                                )
                            }
                        </div>
                    </div >
                </div >

            }
        </>



    )
}