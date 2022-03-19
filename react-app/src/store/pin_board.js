
const LOAD_PINS = 'pin_boards/LOAD';


const load_pin_boards = (pin_board) => ({
    type: LOAD_PINS,
    pin_board
});


// loading all boards that a pin is assigned to
export const pins_boards = (pin_id, user_id) => async (dispatch) => {
    const response = await fetch(`/api/boards/pin-board/${pin_id}`);
    if (response.ok) {
        const boards = await response.json();

        const by_user = boards.boards.filter(board => board.user_id === user_id)[0]

        dispatch(load_pin_boards(by_user));
        return boards.boards;
    } else {
        const errors = await response.json();
        return errors;
    }
}



let initialState = { pin: null };

const pin_board_reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PINS: {
            newState = {};
            return { pin: action.pin_board }
        }

        // case ADD: {
        //     return { [action.board.id]: action.board, ...state };
        // }

        // case UPDATE: {
        //     newState = { ...state }
        //     newState[action.board.id] = action.board
        //     return { ...newState };
        // }

        // case DELETE: {
        //     newState = { ...state };
        //     delete newState[action.board.id];
        //     return newState;
        // }
        default:
            return state;
    }
};

export default pin_board_reducer;
