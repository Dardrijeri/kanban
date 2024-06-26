import { useState } from 'react';
import CardEditor from './cardeditor.js';

function ColumnHeader(props){
    const [showEditor, setShowEditor] = useState(false);
 
    // adds button and hidden editor in first column
    if (props.id === 1 & props.allowEdit){
        return (
            <div className='header'>
                <div className='title'>{props.title}</div>
                <button type='button' className='addcard' onClick={() => setShowEditor(!showEditor)}><img src='images/add-button.svg' alt='Add' /></button>
                {showEditor && <CardEditor setShowEditor={setShowEditor} board={props.board} setBoard={props.setBoard} />}
            </div>
        );
    }

    if (props.id === 5) {
        return (
            <div className='header'>
                {props.showDropped ?
                <><div className='title'>Dropped</div><button type='button' className='dropped-trigger' onClick={() => props.setShowDropped(false)}><img src='images/collapse-left.svg' alt='hide' /></button></> :
                <button type='button' className='dropped-trigger' onClick={() => props.setShowDropped(true)}><img src='images/expand-right.svg' alt='show' /></button>
                }
            </div>
        )
    }

    return (
        <div className='header'><div className='title'>{props.title}</div></div>
    );
}

export default ColumnHeader;