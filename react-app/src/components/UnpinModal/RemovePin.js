import { useSelector } from "react-redux";


export default function RemovePin() {
    const boards = useSelector(state => Object.values(state?.boards))

    return (
        <div id="removePin">
            <div id="removePin_boards">
                <div class="removePin_boardbtn">
                    <div class="close"></div>
                    <div class="message">
                        Action Successful!
                    </div>
                </div>
            </div>
        </div >
    )
}