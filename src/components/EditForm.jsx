import { useState } from "react";

function EditForm({todo, editTodo}){
    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e) => {
        e.preventDefault() //revmove defatult setting, this time remove refresh page
        editTodo(todo.id, content)
    }

    return (
        <form className="create-Form" onSubmit={handleSubmit}>
            <input type = "text" placeholder = "Please input!"  
                value = {content} 
                onChange={(e) => {setContent(e.target.value)}} //two-way binding
            />
            <button type = "submit" > Done </button>
        </form>
    );
}

export default EditForm