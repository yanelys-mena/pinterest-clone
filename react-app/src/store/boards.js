
const LOAD = 'boards/LOAD';
const ADD = 'boards/ADD';
const UPDATE = 'boards/UPDATE';
const DELETE = 'boards/DELETE';


const load = (boards) => ({
    type: LOAD,
    boards
});

const add = (board) => ({
    type: ADD,
    board
});

const update = (board) => ({
    type: UPDATE,
    board
});

const to_delete = (board) => ({
    type: DELETE,
    board
});


export const load_boards_by_user = () => async (dispatch) => {
    const response = await fetch('/api/boards/');
    if (response.ok) {
        const boards = await response.json();
        dispatch(load(boards.boards));
        return boards.boards;
    } else {
        const errors = await response.json();
        return errors;
    }
}


export const add_board = (board) => async (dispatch) => {
    const { name, user_id } = board;

    const form = new FormData()
    form.append('name', name)
    form.append('user_id', user_id)

    const response = await fetch(`/api/boards/`, {
        method: "POST",
        body: form
    });

    if (response.ok) {
        const board = await response.json();
        dispatch(add(board));
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


export const update_board = (boardId, board) => async (dispatch) => {
    const { name, user_id } = board;

    const form = new FormData()
    form.append('name', name)
    form.append('user_id', user_id)

    const response = await fetch(`/api/boards/${boardId}`, {
        method: "PUT",
        body: form
    });

    if (response.ok) {
        const board = await response.json();
        dispatch(update(board));
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

export const delete_board = (boardId) => async (dispatch) => {

    const response = await fetch(`/api/boards/${boardId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        const board = await response.json();
        dispatch(to_delete(board));
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





export const add_pin_to_board = (pin_id, board_id) => async (dispatch) => {
    fetch('/api/boards/pin-board/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pin_id,
            board_id
        })
    }).then(res => res.json()).then(data => dispatch(update(data)));
};



export const remove_pin_from_board = (pin_id, board_id) => async (dispatch) => {
    fetch('/api/boards/pin-board/', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pin_id,
            board_id
        })
    }).then(res => res.json()).then(data => console.log('DATA;', data));
};


let initialState = {};

const boardsReducer = (state = initialState, action) => {
    let newState;
    console.log('REDUCER', action.board)
    switch (action.type) {
        case LOAD: {
            newState = { ...state };
            action.boards.forEach((board) => {
                newState[board.id] = board;
            });
            return newState;
        }

        case ADD: {
            return { [action.board.id]: action.board, ...state };
        }

        case UPDATE: {
            newState = { ...state }
            newState[action.board.id] = action.board
            return { ...newState };
        }

        case DELETE: {
            newState = { ...state };
            delete newState[action.board.id];
            return newState;
        }
        default:
            return state;
    }
};

export default boardsReducer;
