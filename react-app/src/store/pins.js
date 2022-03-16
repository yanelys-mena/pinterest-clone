
const LOAD = 'pins/LOAD';
const ADD = 'pins/ADD';
const UPDATE = 'pins/UPDATE';
const DELETE = 'pins/DELETE';



const load = () => ({
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


const load_pins = () => {
    const response = await fetch('/api/pins/');
    if (response.ok) {
        const pins = await response.json();
        dispatch(load(pins));
        return pins.pins;
    } else {
        const errors = await response.json();
        return errors;
    }
}


const add_pin = (pin) => {
    const { title, description, image, link, user_id } = pin;

    const form = new FormData()
    form.append('title', title)
    form.append('description', description)
    form.append('image', image)
    form.append('link', link)
    form.append('user_id', user_id)

    const response = await fetch(`/api/pins/${pinId}`, {
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

const update_pin = (pinId, pin) => {
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

const delete_pin = (pinId) => {

    const response = await fetch(`/api/pins/${pinId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        const deleted_pin = await response.json();
        dispatch(to_delete(deleted_pin));
        return deleted_pin;
    } else {
        const errors = await response.json();
        return errors;
    }
};