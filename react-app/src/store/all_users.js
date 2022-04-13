const LOAD = 'all_users/LOAD';



const load = (users) => ({
    type: LOAD,
    users
});


export const load_all_users = () => async (dispatch) => {
    const response = await fetch('/api/users/');
    if (response.ok) {
        const allUsers = await response.json();
        console.log('THUNKG,', allUsers.users)
        dispatch(load(allUsers.users));
        return allUsers.users;
    } else {
        const errors = await response.json();
        return errors;
    }
}


let initialState = {};

const all_users_reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD: {
            return [action.users];
        }

        default:
            return state;
    }
};

export default all_users_reducer;
