import { useState } from 'react';
import { update_comment } from '../../store/comments';
import './CommentEditForm.css'
import { useDispatch } from 'react-redux';
const [errors, setErrors] = useState([])

const CommentEditForm = ({ comment }) => {
    const [content, setContent] = useState(comment?.content);
    const [commentInputClass, setCommentInputClass] = useState('comment_done_inactive')
    const [disabled, setDisabled] = useState('disabled');
    const dispatch = useDispatch();

    const updateComment = async (e) => {
        e.preventDefault();
        const data = await dispatch(add_comment(new_comment))

        if (data) {
            setErrors(data)
        } else {
            const commentTextArea = document.querySelector('#commentInput');
            commentTextArea.style.height = 'auto'
            setContent('')
        }
    }



    return (
        <div id="comment_edit_modal">
            <div id="comment_edit_title">Edit Comment</div>
            <form>
                <textarea
                    value={content}
                    // onClick={() => setShowCommentBtn(true)}
                    onChange={(e) => setContent(e.target.value)}
                    id="editCommentInput"
                    type='text'
                    // onKeyUp={handleTextAreaHeight}
                    placeholder='Edit comment'
                ></textarea>
                <div id="comment_buttons_div">
                    <div><button id="comment_cancel">Cancel</button></div>
                    <div onClick={update_comment}><button id={commentInputClass} disabled={disabled}
                    >Done</button></div>
                </div>
            </form>
        </div>
    )
}

export default CommentEditForm