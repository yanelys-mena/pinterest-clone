
const LOAD = 'comments/LOAD';
const ADD = 'comments/ADD';
const UPDATE = 'comments/UPDATE';
const DELETE = 'comments/DELETE';

const load = (comments) => ({
    type: LOAD,
    comments
});

const add = (comment) => ({
    type: ADD,
    comment
});

const update = (comment) => ({
    type: UPDATE,
    comment
});

const to_delete = (comment) => ({
    type: DELETE,
    comment
});


export const load_comments = (pin_id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${pin_id}`);
    if (response.ok) {
        const comments = await response.json();
        dispatch(load(comments.comments));
        return comments.comments;
    } else {
        const errors = await response.json();
        return errors;
    }
}

export const add_comment = (comment) => async (dispatch) => {
    const { content, pin_id, user_id } = comment;

    const form = new FormData()
    form.append('content', content)
    form.append('pin_id', pin_id)
    form.append('user_id', user_id)

    const response = await fetch(`/api/comments/`, {
        method: "POST",
        body: form
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(add(comment));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};



export const update_comment = (comment, commentId) => async (dispatch) => {
    const { content, pin_id, user_id } = comment;

    const form = new FormData()
    form.append('content', content)
    form.append('pin_id', pin_id)
    form.append('user_id', user_id)

    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        body: form
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(update(comment));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const delete_comment = (commentId) => async (dispatch) => {

    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(to_delete(comment));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};



let initialState = {};

const commentsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = {};
            action.comments.forEach((comment) => {
                newState[comment.id] = comment;
            });
            return newState;
        }

        case ADD: {
            return { [action.comment.id]: action.comment, ...state };
        }

        case UPDATE: {
            newState = { ...state }
            newState[action.comment.id] = action.comment
            return { ...newState };
        }

        case DELETE: {
            newState = { ...state };
            delete newState[action.comment.id];
            return newState;
        }
        default:
            return state;
    }
};

export default commentsReducer;
