import { useContext, useRef, useState } from "react";
import ItemContext from "../itemContext";

export default function ToDoListItem({ id, title, completed }) {
    const dispatch = useContext(ItemContext);
    const container = useRef(null);
    const [edit, setEdit] = useState({state: false, title});
    const [done, setDone] = useState(completed);

    function handleEdit() {
        if (edit.state) { // Save logic
            dispatch({type: "MODIFY", title: edit.title, id});
        }
        setEdit({...edit, state: !edit.state});
    }

    function handleCancelDelete() {
        if (edit.state) {
            // Cancel save
            setEdit({state: !edit.state, title}); // Do not keep changes that were cancelled
        } else {
            // Handle delete
            dispatch({type: "DELETE", id});
        }
    }

    function handleDone(e) {
        setDone(e.target.checked);
        dispatch({type: "TOGGLE", id});
    }

    

    return (
        <div className="flex item-container">
            <div className="to-do-item flex">
                <input type="checkbox" name="completed" checked={done} onChange={handleDone} />
                {edit.state ?
                    <input type="text" name="title" value={edit.title} onChange={(e) => setEdit({...edit, title: e.target.value})}/>
                    : 
                    <p>{title}</p>
                }
            </div>
            <div className="action-container">
                <button className="action-btn" onClick={handleEdit}>{edit.state ? "Save" : "Edit"}</button>
                <button className="action-btn" disabled={!done && !edit.state} onClick={handleCancelDelete}>{edit.state ? "Cancel" : "Delete"}</button>
            </div>
        </div>
    );
}