
const LOAD = 'boards/LOAD';


const load = (boards) => ({
    type: LOAD,
    boards
});


// loading all boards that a pin is assigned to
export const pins_boards = (pin_id, user_id) => async (dispatch) => {
    const response = await fetch(`/api/boards/pin-board/${pin_id}`);
    if (response.ok) {
        const boards = await response.json();

        const by_user = boards.boards.filter(board => board.user_id === user_id)
        // console.log('THUNK', pin_id, user_id, test)

        dispatch(load(by_user));
        return boards.boards;
    } else {
        const errors = await response.json();
        return errors;
    }
}



let initialState = {};

const pin_board_reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = {};
            action.boards.forEach((board) => {
                newState[board.id] = board;
            });
            return newState;
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
