import React, {useState} from 'react';

function Input(props){

    const [note, setNotes] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name, value} = event.target;

        setNotes(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        props.onAdd(note);

        setNotes({
            title:"",
            content:""
        })
    }

    return (
        <div class="input-div">
            <form>
                <input 
                type="text" 
                name="title" 
                onChange={handleChange}
                value={note.title}
                placeholder="Title..."/>
                <textarea
                name="content" 
                placeholder="Take a note..." 
                rows="5"
                onChange={handleChange}
                value={note.content}
                ></textarea>
                <button onClick={handleSubmit} id="add-btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Input;