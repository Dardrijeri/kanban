import CardContextMenu from "./card-context-menu";
import { useState } from "react";
import CardEditor from "./cardeditor";


function Card(props){
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [showEditor, setShowEditor] = useState(false);

    // form for displaying cards
    let color = 'white';
    switch(props.priority){
        case 'critical': color ='red';
        break;
        case 'low-priority': color = 'green';
        break;
        case 'high-priority': color = 'orange';
        break;
        case 'medium-priority': color = 'yellow';
        break;
        default: color = 'white';
    }

    // handle right-click on card
    function contextMenuHandler(e){
        e.preventDefault();
        
        // hide menu if user is not manager
        if (props.disableContext) return;
        
        setShowContextMenu(true);
    }

    function changeDateStyle(){
        if (props.date.week < props.selectedDate.week & !props.newDate || props.newDate.week < props.selectedDate.week) {
            return {color: 'red', fontWeight: 'bold'}
        }
    }

    return (
        <div id='card' style={{borderColor: color}} onContextMenu={(e) => contextMenuHandler(e)}>
            {showContextMenu && <CardContextMenu {...props} setShowContextMenu={setShowContextMenu} setShowEditor={setShowEditor} />}
            {showEditor && <CardEditor {...props} setShowEditor={setShowEditor} />}
            <div id='description'>{ props.description }</div>
            <div id='priority' style={{backgroundColor: color}}></div>
            <div id='id'>#{ props.id } </div>
            {props.date.week && <div id='date' style={changeDateStyle()}>W{ props.date.week } Y{ props.date.year % 100 }</div>}
            {props.employee && <div>{props.employee}</div>}
            {props.employeePic && <div><img src={props.employeePic} alt="" /></div>}
        </div>
    )
}

export default Card;