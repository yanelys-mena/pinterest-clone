const LOAD = 'profile/LOAD';
const UPDATE = 'profile/UPDATE';


const load = (user) => ({
    type: LOAD,
    user
});

const update = (user) => ({
    type: UPDATE,
    user
});


// loading all boards that a pin is assigned to
export const load_profile = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}`);
    if (response.ok) {
        const user = await response.json();
        dispatch(load(user));
    } else {
        const errors = await response.json();
        return errors;
    }
}

export const update_profile = (current_user, profile_user, curr_profile) => async (dispatch) => {

    const response = await fetch(`/api/users/follow/${curr_profile}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            followed_id: profile_user,
            follower_id: current_user
        })
    })

    const user = await response.json();
    dispatch(update(user));
}

export const unfollow_user = (current_user, profile_user, curr_profile) => async (dispatch) => {

    const response = await fetch(`/api/users/unfollow/${curr_profile}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            unfollow: profile_user,
            follower_id: current_user
        })
    })
    const user = await response.json();
    dispatch(update(user));

}

const initialState = { user: null };

const profile_user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            return { user: action.user }
        }

        // case ADD: {
        //     return { [action.board.id]: action.board, ...state };
        // }
        case UPDATE: {
            let newState = { ...state }
            newState[action.user.id] = action.user
            return { user: action.user };
        }

        // case DELETE: {
        //     newState = { ...state };
        //     delete newState[action.board.id];
        //     return newState;
        // }
        default:
            return state;
    }
};

export default profile_user_reducer;
