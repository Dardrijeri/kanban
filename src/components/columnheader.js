import { useState } from 'react';
import CardEditor from './cardeditor.js';

function ColumnHeader(props){
    const [showEditor, setShowEditor] = useState(false);
    if (props.id === 1 & props.allowEdit){
        // adds button and hidden editor in first column
        return (
            <div id='header'>
                <div id='title'>{props.title}</div>
                <button type='button' id='addcard' onClick={() => setShowEditor(!showEditor)}>Add card</button>
                {showEditor && <CardEditor passShowEditor={showEditor} passSetShowEditor={setShowEditor}
                allBoards={props.allBoards} setAllBoards={props.setAllBoards}
                />}
            </div>
        );
    }
    else {
        return (
            <div id='header'><div id='title'>{props.title}</div></div>
        );
    }
}

export default ColumnHeader;