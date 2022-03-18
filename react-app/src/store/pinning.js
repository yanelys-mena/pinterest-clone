
const ADD_PIN_ON_BOARD = 'pin_to_board/ADD';
const DELETE_PIN_ON_BOARD = 'pin_to_board/DELETE';


const add = (board) => ({
    type: ADD_PIN_ON_BOARD,
    board
});


const to_delete = (board) => ({
    type: DELETE_PIN_ON_BOARD,
    board
});



export const add_pin_to_board = (board) => async (dispatch) => {
    const { name, user_id } = board;

    const form = new FormData()
    form.append('name', name)
    form.append('user_id', user_id)

    fetch('/api/boards/pin-board/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pin_id: 56,
            board_id: 10
        })
    }).then(res => res.json()).then(data => console.log(data));

    // if (response.ok) {
    //     const board = await response.json();
    //     dispatch(add(board));
    //     return null;
    // } else if (response.status < 500) {
    //     const data = await response.json();
    //     if (data.errors) {
    //         return data.errors;
    //     }
    // } else {
    //     return ['An error occurred. Please try again.']
    // }
};


// export const delete_board = (boardId) => async (dispatch) => {

//     const response = await fetch(`/api/boards/${boardId}`, {
//         method: "DELETE",
//     });

//     if (response.ok) {
//         const board = await response.json();
//         dispatch(to_delete(board));
//         return null;
//     } else if (response.status < 500) {
//         const data = await response.json();
//         if (data.errors) {
//             return data.errors;
//         }
//     } else {
//         return ['An error occurred. Please try again.']
//     }
// };



// let initialState = {};

// const boardsReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         case LOAD: {
//             newState = { ...state };
//             action.boards.forEach((board) => {
//                 newState[board.id] = board;
//             });
//             return newState;
//         }

//         case ADD: {
//             return { [action.board.id]: action.board, ...state };
//         }

//         case UPDATE: {
//             newState = { ...state }
//             newState[action.board.id] = action.board
//             return { ...newState };
//         }

//         case DELETE: {
//             newState = { ...state };
//             delete newState[action.board.id];
//             return newState;
//         }
//         default:
//             return state;
//     }
// };

// export default boardsReducer;
