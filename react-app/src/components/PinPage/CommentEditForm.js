import { useState } from 'react';
import { update_comment, delete_comment } from '../../store/comments';
import './CommentEditForm.css'
import { useDispatch } from 'react-redux';

const CommentEditForm = ({ setShowModal, comment }) => {
    const [content, setContent] = useState(comment?.content);
    const [commentInputClass, setCommentInputClass] = useState('comment_done_inactive')

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([])
    const [height, setHeight] = useState('80px')

    const updateComment = async (e) => {
        e.preventDefault();
        const updated_comment = {
            content, pin_id: comment?.pin_id, user_id: comment?.user_id

        }
        const data = await dispatch(update_comment(updated_comment, comment?.id))

        if (data) {
            setErrors(data)
        } else {
            // const commentTextArea = document.querySelector('#editCommentInput');
            // commentTextArea.style.height = 'auto'
            setContent('')
            setShowModal(false)
        }
    }

    // const handleTextAreaHeight = (e) => {
    //     const commentTextArea = document.querySelector('#editCommentInput');
    //     commentTextArea.style.height = 'auto';
    //     setHeight(e.target.scrollHeight);
    //     commentTextArea.style.height = `${height}px`;
    // }

    const deleteComment = (e) => {
        e.preventDefault();
        dispatch(delete_comment(comment?.id))
        setShowModal(false)

    }

    return (
        <div id="comment_edit_modal">
            <div id="comment_edit_title">Edit Comment</div>
            <form>
                <div id="comment_errors">
                    {errors.map((error, ind) => (
                        <div key={ind}>{error.split(':')[1]}</div>
                    ))}
                </div>
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
                    <div onClick={() => setShowModal(false)}><button id="comment_cancel">Cancel</button></div>
                    <div onClick={updateComment}><button id='comment_done_active'
                    >Done</button></div>
                </div>
            </form>
            <div id="delete_comment" onClick={deleteComment}>Delete my comment instead.</div>
        </div>
    )
}

export default CommentEditForm