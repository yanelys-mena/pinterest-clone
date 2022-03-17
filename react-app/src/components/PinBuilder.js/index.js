import './PinBuilder.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_pin } from '../../store/pins'
import { useHistory } from 'react-router-dom';

export default function PinBuilder() {
    const user = useSelector(state => state?.session.user)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    // const [image, setImage] = useState(null)
    const [link, setLink] = useState('null')
    const history = useHistory()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPin = {
            title, description, image: 'https://i.pinimg.com/564x/d6/cb/4a/d6cb4a0fc20ae964670e02bc516313bc.jpg', link, user_id: user?.id
        };

        dispatch(add_pin(newPin))
        history.push(`/`)
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
                            <button>submit</button>
                        </form>

                    </div>
                </div>

            </div>


        </div>
    )
}