import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { delete_pin, update_pin } from '../../store/pins';
/* eslint-disable */

export default function EditForm({ pin, setShowModal, user }) {

    const [title, setTitle] = useState(pin?.title)
    const [description, setDescription] = useState(pin?.description ? pin?.description : '');
    const [errors, setErrors] = useState([]);
    const [link, setLink] = useState(pin?.link ? pin?.link : '')
    const history = useHistory()
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {

        e.preventDefault()
        const updated_pin = {
            title, description, image: pin?.image, link, user_id: user?.id
        };

        const data = dispatch(update_pin(pin?.id, updated_pin)).then((data) => {
            data ? setErrors(data) : setShowModal(false);
        });
    }

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(delete_pin(pin?.id));
        history.push('/')
    }

    return (
        <div id="editPinModal">
            <div id="editPinTitle"><div>Edit this Pin</div></div>
            <div id="editFormDiv">
                <div id="editLeft">
                    <form id="ediPinForm">
                        <div>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <label>title</label>
                        {/* {errors.title && <div>{errors.title}</div>} */}
                        <input
                            name='title'
                            type='text'
                            placeholder='Add your title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}>
                        </input>
                        <label>description</label>
                        <input
                            name='description'
                            type='text'
                            placeholder='Tell us what your pin is about'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                        </input>
                        <label>website link</label>
                        <input
                            name='link'
                            type='text'
                            placeholder='Add a destination link'
                            value={link}
                            onChange={(e) => setLink(e.target.value.toLowerCase())}>
                        </input>
                    </form>

                </div>
                <div id="editRight">
                    <div><img src={pin?.image} alt='pin' id="editImage"></img></div>
                </div>


            </div>
            <div id="editPinFooter">
                <button id="deleteButton" onClick={handleDelete}>Delete</button>

                <div id="editFooterRight">
                    <button id="cancelButton">Cancel</button>
                    <button onClick={handleSubmit} id="pinSaveBtn">Save</button>
                </div>
            </div>
        </div>
    )
}