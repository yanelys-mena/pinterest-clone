
const LOAD = 'pins/LOAD';
const ADD = 'pins/ADD';
const UPDATE = 'pins/UPDATE';
const DELETE = 'pins/DELETE';


const load = (pins) => ({
    type: LOAD,
    pins
});

const add = (pin) => ({
    type: ADD,
    pin
});

const update = (pin) => ({
    type: UPDATE,
    pin
});

const to_delete = (pin) => ({
    type: DELETE,
    pin
});


export const load_pins = () => async (dispatch) => {

    const response = await fetch('/api/pins/');
    if (response.ok) {
        const pins = await response.json();
        dispatch(load(pins.pins));
        return pins.pins;
    } else {
        const errors = await response.json();
        return errors;
    }
}


export const add_pin = (pin) => async (dispatch) => {
    const { title, description, image, link, user_id } = pin;

    const form = new FormData()
    form.append('title', title)
    form.append('description', description)
    form.append('image', image)
    form.append('link', link)
    form.append('user_id', user_id)

    const response = await fetch('/api/pins/', {
        method: "POST",
        body: form
    });

    if (response.ok) {
        const pin = await response.json();
        dispatch(add(pin));
        return pin;
    } else {
        const errors = await response.json();
        return errors;
    }
};


export const update_pin = (pinId, pin) => async (dispatch) => {
    const { title, description, image, link, user_id } = pin;

    const form = new FormData()
    form.append('title', title)
    form.append('description', description)
    form.append('image', image)
    form.append('link', link)
    form.append('user_id', user_id)

    const response = await fetch(`/api/pins/${pinId}`, {
        method: "PUT",
        body: form
    });

    if (response.ok) {
        const pin = await response.json();
        dispatch(update(pin));
        return pin;
    } else {
        const errors = await response.json();
        return errors;
    }
};

export const delete_pin = (pinId) => async (dispatch) => {

    const response = await fetch(`/api/pins/${pinId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        const pin = await response.json();
        dispatch(to_delete(pin));
        return pin;
    } else {
        const errors = await response.json();
        return errors;
    }
};



let initialState = {};

const pinsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            newState = { ...state };
            action.pins.forEach((pin) => {
                newState[pin.id] = pin;
            });
            return newState;
        }

        case ADD: {
            return { [action.pin.id]: action.pin, ...state };
        }

        case UPDATE: {
            return { [action.pin.id]: action.pin, ...state };
        }

        case DELETE: {
            newState = { ...state };
            delete newState[action.pin.id];
            return newState;
        }
        default:
            return state;
    }
};

export default pinsReducer;
