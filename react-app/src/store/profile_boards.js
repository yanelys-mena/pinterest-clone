
const LOAD = 'profile_boards/LOAD';
// const ADD = 'boards/ADD';
// const UPDATE = 'boards/UPDATE';
// const DELETE = 'boards/DELETE';


const load = (boards) => ({
    type: LOAD,
    boards
});



export const boards_by_profile = (profile_id) => async (dispatch) => {
    const response = await fetch(`/api/boards/profile/${profile_id}`);
    if (response.ok) {
        const boards = await response.json();
        dispatch(load(boards.boards));
        return boards.boards;
    } else {
        const errors = await response.json();
        return errors;
    }
}

let initialState = {};

const profile_board_reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = { ...state };
            action.boards.forEach((board) => {
                newState[board.id] = board;
            });
            return newState;
        }

        default:
            return state;
    }
};

export default profile_board_reducer;
