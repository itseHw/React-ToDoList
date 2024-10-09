import { useState } from "react";

function CreateForm ({addTodo}) {

    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault() //revmove defatult setting, this time remove refresh page
        addTodo(content)
        setContent('') //remove the inputed words
    }

    return (
        <form className="create-Form" onSubmit={handleSubmit}>
            <input type = "text" placeholder = "Please input!"  
                value = {content} 
                onChange={(e) => {setContent(e.target.value)}} //two-way binding
            />
            <button type = "submit" > Add </button>
        </form>
    );
}

export default CreateForm