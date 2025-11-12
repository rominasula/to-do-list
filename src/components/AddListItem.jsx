import { useContext, useState } from "react";
import ItemContext from "../itemContext";

export default function AddListItem({newItemId}) {
    const dispatch = useContext(ItemContext);
    const [title, setTitle] = useState("");

    function handleClick() {
        if (title !== "") {
            dispatch({type: "ADD", item: {userId: 1, id: newItemId, title, completed: false} });
            setTitle("");
        }
    }

    return (
        <div className="add-item">
            <input type="text" placeholder="Add task" name="add-task" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button className="action-btn" onClick={handleClick}>Add</button>
        </div>
    );
}