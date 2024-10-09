import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper(){

    const [todos, setTodos]  = useState([
        {content: 'Search Job Ad', id: Math.random(), isCompleted: true, isEditing: false}, // normal id should set in database, which not using Math.random be the id
        {content: 'Check Email', id: Math.random() , isCompleted: false, isEditing: false},
    ]);

    const addTodo = (content) => {
        setTodos([...todos, {content: content, id:Math.random()}]) // ... used to show array or object all contents
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) =>{
            return todo.id !== id
        }))
    }

    const toggleCompleted = (id) => {
        setTodos(todos.map( (todo) => {
            return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
        }))
    }

    const editTodo = (id, newContent) => {
        setTodos(todos.map( (todo) =>{
            return todo.id === id ? {...todo, content: newContent, isEditing: false} : todo
        }))
    }

    const toggleisEditing = (id) =>{
        setTodos(todos.map( (todo) => {
            return todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>Waiting To do List!</h1>
            <CreateForm addTodo={addTodo}/>
            {todos.map((todo) => {
                return<Todo toggleCompleted = {toggleCompleted} toggleisEditing = {toggleisEditing} editTodo = {editTodo} todo={todo} key={todo.id} deleteTodo = {deleteTodo}/>
            })}
        </div>
    );
}

export default TodoWrapper