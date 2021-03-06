import './PinBuilder.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_pin } from '../../store/pins'
import { useHistory } from 'react-router-dom';
import UploadImage from './UploadImage';

export default function PinBuilder() {
    const user = useSelector(state => state?.session.user);
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(null);
    const [fileError, setFileError] = useState('')
    const history = useHistory()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPin = {
            title, description, image, link, user_id: user?.id
        };

        let pinId;

        (async () => {
            const data = await dispatch(add_pin(newPin))

            if (data.errors) {
                setErrors(data.errors)
                console.log('errors', errors)
            } else {
                pinId = data?.id;
                history.push(`/pins/${pinId}`)
            }

        })();
    }



    return (
        <div id="pageBuilder">

            <div id="builderContent">
                <div id="leftBuilder">
                    <UploadImage image={image} setImage={setImage} setFileError={setFileError} fileError={fileError} />
                </div>
                <div id="rightBuilder">
                    <div id="create_pin_title">Create a Pin</div>
                    <div id="pinFormDiv">
                        <form id="pinForm" onSubmit={handleSubmit}>
                            <div>
                                {errors.map((error, ind) => (
                                    <div key={ind}>{error}</div>
                                ))}
                            </div>
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
                                placeholder='Tell us what your pin is about (optional)'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}>
                            </input>
                            <input
                                name='link'
                                type='text'
                                placeholder='Add a destination link (optional)'
                                value={link}
                                onChange={(e) => setLink(e.target.value)}>
                            </input>
                            <button type="submit">submit</button>
                        </form>

                    </div>
                </div>

            </div>


        </div >
    )
}