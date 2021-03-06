import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { delete_pin, update_pin } from '../../store/pins';
import { load_boards_by_user } from '../../store/boards';
import RemovePin from '../UnpinModal/RemovePin'
/* eslint-disable */

export default function EditForm({ pin, setShowModal, user, }) {
    const [title, setTitle] = useState(pin?.title)
    const [description, setDescription] = useState(pin?.description ? pin?.description : '');
    const [errors, setErrors] = useState([]);
    // const pin_boards = useSelector(state => Object.values(state?.pinBoard)[0])
    const [link, setLink] = useState(pin?.link ? pin?.link : '')
    const boards = useSelector(state => Object.values(state?.boards))
    const history = useHistory()
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)


    useEffect(() => {
        dispatch(load_boards_by_user(user?.id))
    }, [dispatch]);


    const options = boards.map(board => {
        return { value: `${board?.id}`, label: `${board?.name}` }
    })

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
        setPage(1)
        dispatch(delete_pin(pin?.id));
        setPage(1)
        history.goBack()
    }


    return (
        <>
            {page === 1 &&
                <div id="editPinModal">
                    <div id="editPinTitle"><div>Edit this Pin</div></div>
                    <button onClick={() => setPage(2)}>See Boards</button>

                    <div id="editFormDiv">

                        <div id="editLeft">
                            <form id="ediPinForm" onSubmit={handleSubmit} >
                                <div>
                                    {errors.map((error, ind) => (
                                        <div key={ind}>{error}</div>
                                    ))}
                                </div>
                                <label>title</label>
                                <input
                                    name='title'
                                    type='text'
                                    placeholder='Add your title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}>
                                </input>
                                <label>description (optional)</label>
                                <input
                                    name='description'
                                    type='text'
                                    placeholder='Tell us what your pin is about'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}>
                                </input>
                                <label>website (optional)</label>
                                <input
                                    name='link'
                                    type='text'
                                    placeholder='Add a destination link'
                                    value={link}
                                    onChange={(e) => setLink(e.target.value.toLowerCase())}>
                                </input>
                                <button type="submit" style={{ display: 'none' }}></button>
                            </form>

                        </div>
                        <div id="editRight">

                            <div><img src={pin?.image} alt='pin' id="editImage"></img></div>
                        </div>

                    </div>
                    <div id="editPinFooter">
                        <button id="deleteButton" onClick={handleDelete}>Delete</button>

                        <div id="editFooterRight">
                            <button id="cancelButton" onClick={() => setShowModal(false)}>Cancel</button>
                            <button onClick={handleSubmit} id="pinSaveBtn">Save</button>
                        </div>
                    </div>
                </div>
            }
            {page === 2 && <RemovePin pin={pin} setPage={setPage} page={page} />}
        </>
    )
}