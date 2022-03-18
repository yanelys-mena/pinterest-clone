import './PinBuilder.css';
import { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_pin } from '../../store/pins'
import { useHistory } from 'react-router-dom';

export default function PinBuilder() {
    const user = useSelector(state => state?.session.user)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('')
    const [link, setLink] = useState('')
    const history = useHistory()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPin = {
            title, description, image, link, user_id: user?.id
        };

        let pinId;

        (async () => {
            await dispatch(add_pin(newPin)).then(pin => pinId = pin?.id
            ).then(() => history.push(`/pins/${pinId}`))
        })();
    }


    return (
        <div id="pageBuilder">
            <div id="builderContent">
                <div id="leftBuilder">
                    <div>image uploader</div>
                </div>
                <div id="rightBuilder">
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

            </div>


        </div>
    )
}