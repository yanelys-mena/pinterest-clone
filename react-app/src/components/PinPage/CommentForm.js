import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_comment, update_comment } from '../../store/comments'
import './CommentForm.css';


const CommentForm = ({ user, pinId }) => {
    const [content, setContent] = useState('');
    const [showCommentBtn, setShowCommentBtn] = useState(false);
    const [disabled, setDisabled] = useState('disabled');
    const [commentInputClass, setCommentInputClass] = useState('comment_done_inactive')
    const [errors, setErrors] = useState([])
    const [height, setHeight] = useState('20px')

    const dispatch = useDispatch();

    const addComment = async (e) => {
        e.preventDefault();
        const new_comment = { content, pin_id: pinId, user_id: user?.id }
        const data = await dispatch(add_comment(new_comment))

        if (data) {
            setErrors(data)
        } else {
            const commentTextArea = document.querySelector('#commentInput');
            commentTextArea.style.height = 'auto'
            setContent('')
        }
    }


    useEffect(() => {
        if (content.length > 0) {
            setCommentInputClass('comment_done_active')
            setDisabled(false)

        } else {
            setCommentInputClass('comment_done_inactive')
            setDisabled('disabled')

        }
    }, [setContent, content])

    const handleTextAreaHeight = (e) => {
        const commentTextArea = document.querySelector('#commentInput');
        commentTextArea.style.height = 'auto';
        setHeight(e.target.scrollHeight);
        commentTextArea.style.height = `${height}px`;
    }

    return (
        <div id="leaveComment">

            <div id="commentTip">Share feedback or ask a question.
            </div>
            <div id="comment_errors">
                {errors.map((error, ind) => (
                    <div key={ind}>{error.split(':')[1]}</div>
                ))}
            </div>
            <div id="commentInputDiv">

                <div id="userPhoto_comment">
                    {user?.photo ? <img src={user?.photo} alt='userPhoto'></img> : <i style={{ fontSize: '50px' }} className="fas fa-user-circle bigger-profile"></i>}
                </div>

                <div id="formDiv">

                    <form >
                        <textarea
                            height={height}
                            value={content}
                            onClick={() => setShowCommentBtn(true)}
                            onChange={(e) => setContent(e.target.value)}
                            id="commentInput"
                            type='text'
                            onKeyUp={handleTextAreaHeight}
                            placeholder='Add a comment'
                        ></textarea>

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