import { useState } from 'react';
import CardEditor from './cardeditor.js';

function ColumnHeader(props){
    const [showEditor, setShowEditor] = useState(false);
    console.log(props);
    if (props.id === 1){
        // adds button and hidden editor in first column
        return (
            <>
            <div id='header'>{props.title}</div>
            <button type='button' id='addcard' onClick={() => setShowEditor(!showEditor)}>Add card</button>
            {showEditor && <CardEditor passShowEditor={showEditor} passSetShowEditor={setShowEditor}
            passSetBoard={props.passSetBoard} passBoard={props.passBoard}
            />}
            </>
        );
    }
    else {
        return (
            <div id='header'>{props.title}</div>
        );
    }
}

export default ColumnHeader;