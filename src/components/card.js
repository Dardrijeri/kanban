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
        if (props.date.week < props.selectedDate.week & (!props.newDate || props.newDate.week < props.selectedDate.week)) {
            return {color: 'red', fontWeight: 'bold'}
        }
    }

    return (
        <div className='card' style={{borderColor: color}} onContextMenu={(e) => contextMenuHandler(e)}>
            {showContextMenu && <CardContextMenu {...props} setShowContextMenu={setShowContextMenu} setShowEditor={setShowEditor} />}
            {showEditor && <CardEditor {...props} setShowEditor={setShowEditor} />}
            <div className='description'>{ props.description }</div>
            <hr width='100%' size='2' color='#727272' />
            <div className='employee'>
                {props.employeePic && <div className='employee-pic'><img src={props.employeePic} alt="" /></div>}
                {props.employee && <div>{props.employee}</div>}
            </div>
            {props.date.week && <div className='date' style={changeDateStyle()}>W{ props.date.week } Y{ props.date.year % 100 }</div>}
        </div>
    )
}

export default Card;