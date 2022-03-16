
const LOAD = 'boards/LOAD';
const ADD = 'boards/ADD';
const UPDATE = 'boards/UPDATE';
const DELETE = 'boards/DELETE';


const load = () => ({
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


export const load_boards_by_user = () => {
    const response = await fetch('/api/boards/');
    if (response.ok) {
        const boards = await response.json();
        dispatch(load(boards));
        return boards.boards;
    } else {
        const errors = await response.json();
        return errors;
    }
}


export const add_board = (board) => {
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
        return board;
    } else {
        const errors = await response.json();
        return errors;
    }
};


export const update_board = (boardId, board) => {
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
        return board;
    } else {
        const errors = await response.json();
        return errors;
    }
};

export const delete_board = (boardId) => {

    const response = await fetch(`/api/boards/${boardId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        const board = await response.json();
        dispatch(to_delete(board));
        return board;
    } else {
        const errors = await response.json();
        return errors;
    }
};



let initialState = {};

const boardsReducer = (state = initialState, action) => {
    let newState;
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
            return { [action.board.id]: action.board, ...state };
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
