import { useState } from 'react';

const CommentEditForm = ({ comment }) => {
    const [content, setContent] = useState(comment);

    return (
        <div>
            <form >
                <textarea
                    // height={height}
                    value={content}
                    // onClick={() => setShowCommentBtn(true)}
                    onChange={(e) => setContent(e.target.value)}
                    id="commentInput"
                    type='text'
                    // onKeyUp={handleTextAreaHeight}
                    placeholder='Add a comment'
                ></textarea>

            </form>
        </div>
    )
}

export default CommentEditForm