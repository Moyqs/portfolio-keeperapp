import React from 'react';

function Note(props){

    function handleClick(){
        props.onDelete(props.id)
      }

    return (
        <div className="note-div">
            <div className="mobile-note-css">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button id="delete" onClick={handleClick}>Delete</button>
            </div>
        </div>
    )
}

export default Note;