import React from "react";

function TodoList({ todos, setTodos }) {
    const handelDelete = (t) => {
        const filtred = todos.filter(todo => todo !== t);
        setTodos(filtred);
    }
    return (
        <div className="TodoList">
            {todos.map(todo => (<div>{todo} <span onClick={() => handelDelete(todo)} >Delete</span></div>))}
        </div>
    )
}
export default TodoList;