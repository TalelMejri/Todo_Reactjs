import React, { useState } from "react";
function TodoForm({ setTodos }) {

    const [newTodo, setNewTodo] = useState("");

    const handlingAdding = () => {
        setTodos(OldTodos => [...OldTodos, newTodo]);
        setNewTodo("");
    }

    return (
        <div className="TodoForm">
            <input type="text" placeholder="Enter Name"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo} />
            <button onClick={handlingAdding}>Add</button>
        </div>
    )

}
export default TodoForm;