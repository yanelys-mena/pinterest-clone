import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_board, update_board, delete_board } from '../../store/boards';
import './CreateBoardForm.css'

export default function CreateBoardForm({ user, setShowModal, board }) {
    const [name, setName] = useState(board?.name ? board?.name : '')
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    console.log('CREATE BOARD', board)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const new_board = {
            name, user_id: user?.id
        };

        dispatch(add_board(new_board)).then((data) => {
            data ? setErrors(data) : setShowModal(false);
        });
    }

    const handleEdit = (e) => {
        e.preventDefault();

        const updated_board = {
            name, user_id: user?.id
        };

        dispatch(update_board(board?.id, updated_board)).then((data) => {
            data ? setErrors(data) : setShowModal(false);
        });

    }

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(delete_board(board?.id));
    }


    return (
        <div id="board_modal">
            <div id="createBoardTitle"><div> {board ? 'Edit Board' : 'Create Board'}</div></div>
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

                {board ? <button id="deleteButton" onClick={handleDelete}>Delete</button> : ''}
                <div></div>
                <div id="board_form_right_footer">
                    <button id="cancelButton" onClick={() => setShowModal(false)}>Cancel</button>

                    <button onClick={board ? handleEdit : handleSubmit} id="pinSaveBtn">Save</button>
                </div>
            </div>
        </div >
    )
}