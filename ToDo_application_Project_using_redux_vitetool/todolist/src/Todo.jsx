import { useState } from "react";
import { edittodo, deletetodo } from "./actions";
import { useDispatch } from "react-redux";

function Todo({ id, title }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(edittodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deletetodo(id));
  };
  return (
    <div>
      {editing ? (
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            save
          </button>
        </div>
      ) : (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <p>{title}</p>
          <div className="actions">
            <button
              className="btn btn-warning me-2"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Del
            </button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;