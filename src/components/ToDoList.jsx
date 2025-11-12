import ToDoListItem from "./ToDoListItem";

export default function ToDoList({list}) {

    const loading = () => <h2 className="message">Loading todo items...</h2>
    const loaded = () => list.length > 0 ? list.map(l => <ToDoListItem key={l.id} {...l} />) : <h2 className="message">No todo list items</h2>;

    return (
        <>
            {list ? loaded() : loading()}
        </>
    )
}