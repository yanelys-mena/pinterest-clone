import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { add_board } from '../../store/boards';
import './CreateBoardForm.css'

export default function CreateBoardForm({ user, setShowModal }) {

    const [name, setName] = useState('')
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {

        e.preventDefault()
        const new_board = {
            name, user_id: user?.id
        };

        const data = dispatch(add_board(new_board)).then((data) => {
            data ? setErrors(data) : setShowModal(false);
        });
    }


    return (
        <div id="createBoardModal">
            <div id="createBoardTitle"><div>Create a Board </div></div>
            <div id="createBoardFormDiv">
                <form id="createBoardForm">
                    <div>
                        {errors.length > 0 && errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <label id="boardNameLabel">Name</label>
                    <input
                        name='name'
                        type='name'
                        placeholder='Add your title'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                </form>
            </div>
            <div id="createBoardFooter">
                <button id="cancelButton" onClick={() => setShowModal(false)}>Cancel</button>
                <button onClick={handleSubmit} id="pinSaveBtn">Save</button>
            </div>
        </div >
    )
}