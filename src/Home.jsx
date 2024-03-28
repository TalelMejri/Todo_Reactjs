import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function Home(){
    const [todos,setTodos] =useState([]);
    return (
        <div className="Home">
            <h1>Todo</h1>
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Home;