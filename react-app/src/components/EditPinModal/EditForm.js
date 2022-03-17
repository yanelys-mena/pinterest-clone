import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update_pin } from '../../store/pins';


export default function EditForm({ pin, setShowModal }) {

    const [title, setTitle] = useState(pin?.title)
    const [description, setDescription] = useState(pin?.description ? pin?.description : '');
    const [image, setImage] = useState(pin?.image)
    const [link, setLink] = useState(pin?.link ? pin?.link : '')
    // const history = useHistory()
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const updated_pin = {
            title, description, image, link, user_id: user?.id
        };

        dispatch(update_pin(updated_pin));
        setShowModal(false);
        // (async () => {
        //     await dispatch(add_pin(newPin)).then(pin => pinId = pin?.id
        //     ).then(() => history.push(`/pins/${pinId}`))
        // })();
    }

    return (
        <div>
            <div id="pinFormDiv">
                <form id="pinForm" onSubmit={handleSubmit}>
                    <input
                        name='title'
                        type='text'
                        placeholder='Add your title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                    </input>
                    <input
                        name='description'
                        type='text'
                        placeholder='Tell us what your pin is about'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </input>
                    <input
                        name='link'
                        type='text'
                        placeholder='Add a destination link'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}>
                    </input>
                    <input
                        name='image'
                        type='text'
                        placeholder='Add an image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}>
                    </input>
                    <button>submit</button>
                </form>

            </div>
        </div>
    )
}