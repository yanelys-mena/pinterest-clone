import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_comment, update_comment } from '../../store/comments'
import './CommentForm.css';


const CommentForm = ({ user, pinId }) => {
    const [content, setContent] = useState('');
    const [showCommentBtn, setShowCommentBtn] = useState(false);
    const [disabled, setDisabled] = useState('disabled');
    const [commentInputClass, setCommentInputClass] = useState('comment_done_inactive')

    const dispatch = useDispatch();

    const addComment = (e) => {
        e.preventDefault();
        const new_comment = { content, pin_id: pinId, user_id: user?.id }
        dispatch(add_comment(new_comment))
    }

    const updateComment = (e) => {
        e.preventDefault();
        const new_comment = { content, pin_id: pinId, user_id: user?.id }
        dispatch(update_comment(new_comment))
    }


    useEffect(() => {
        console.log('content', content)
        if (!content.length) {
            setCommentInputClass('comment_done_active')
            setDisabled(false)

        } else {
            setCommentInputClass('comment_done_inactive')
            setDisabled('disabled')

        }
    }, [setContent, content])

    return (
        <div id="leaveComment">

            <div id="commentTip">Share feedback or ask a question.
            </div>
            <div id="commentInputDiv">

                <div id="userPhoto_comment">
                    {user?.photo ? <img src={user?.photo} alt='userPhoto'></img> : <i style={{ fontSize: '50px' }} className="fas fa-user-circle bigger-profile"></i>}
                </div>

                <div id="formDiv">

                    <form onSubmit={addComment}>
                        <input
                            onClick={() => setShowCommentBtn(true)}
                            onChange={(e) => setContent(e.target.value)}
                            id="commentInput"
                            type='text'
                            placeholder='Add a comment'
                        ></input>

                    </form>

                </div>

            </div>
            {showCommentBtn && <>
                <div id="comment_buttons_div">
                    <div onClick={() => setShowCommentBtn(false)}><button id="comment_cancel">Cancel</button></div>
                    <div onClick={addComment}><button id={commentInputClass} disabled={disabled}
                    >Done</button></div>
                </div>
            </>}
        </div>
    )
};

export default CommentForm;