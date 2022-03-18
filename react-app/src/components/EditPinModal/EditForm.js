import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { delete_pin, update_pin } from '../../store/pins';
import { load_boards_by_user } from '../../store/boards';
import Select from 'react-select'
/* eslint-disable */

export default function EditForm({ pin, setShowModal, user, pin_boards }) {
    console.log('ediForm', pin_boards)

    const [title, setTitle] = useState(pin?.title)
    const [description, setDescription] = useState(pin?.description ? pin?.description : '');
    const [errors, setErrors] = useState([]);
    const [link, setLink] = useState(pin?.link ? pin?.link : '')
    const [selectedBoard, setSelectedBoard] = useState(pin_boards?.name ? pin_boards.name : null)
    const boards = useSelector(state => Object.values(state?.boards))
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load_boards_by_user(user?.id))
    }, [dispatch]);

    const options = boards.map(board => {
        return { value: `${board?.id}`, label: `${board?.name}` }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updated_pin = {
            title, description, image: pin?.image, link, user_id: user?.id, selectedBoard: selectedBoard?.value
        };

        const data = dispatch(update_pin(pin?.id, updated_pin)).then((data) => {
            data ? setErrors(data) : setShowModal(false);
        });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(delete_pin(pin?.id));
        history.goBack()
    }

    console.log(selectedBoard, pin_boards)


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
                        <div id="react-select">
                            <Select
                                defaultValue={selectedBoard}
                                onChange={setSelectedBoard}
                                options={options} />
                        </div>

                        <label>title</label>
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