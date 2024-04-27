import Select from 'react-select';
import { useState } from 'react';
import { createPortal } from 'react-dom';


function CardContextMenu(props){
    const [showSelect, setShowSelect] = useState(false);

    // temp solution, list of available employees
    const options = [
                        {value: 'John', label: 'John'},
                        {value: 'Harold', label: 'Harold'},
                        {value: 'David', label: 'David'},
                    ]
    

    // modifies board when employee is selected
    function selectEmployee(e){
        props.board.columns.forEach((element) => {
            element.cards.forEach((card) => {
                if (card.id === props.id) card.employee = e.value;
            })
        });
        // using spread to force re-render
        props.setBoard({...props.board});
        props.setShowContextMenu(false);
    }
    
    // adds new date to card
    function setNewDate(){
        props.board.columns.forEach((element) => {
            element.cards.forEach((card) => {
                if (card.id === props.id) card.newDate = props.selectedDate;
            })
        });
        props.setBoard({...props.board});
        props.setShowContextMenu(false);
    }

    return (
    createPortal(
    <>
        {/* handles click outside of contextbox */}
        <div style={{position: 'fixed', width: '100%', height: '100%', top: 0, left: 0}} onMouseDown={() => props.setShowContextMenu(false)} />
        <div className="context-menu" style={{position: 'absolute', left: props.mouseCord[0], top: props.mouseCord[1]}}>
            <button onClick={() => {props.setShowEditor(true); props.setShowContextMenu(false);}}>Edit card</button>
            { showSelect ? 
            <Select onChange={(e) => selectEmployee(e)} options={options}/> 
            : 
            <button onClick={() => setShowSelect(true)}>Select employee</button>
            }
            <button onClick={() => setNewDate()}>Ignore overdue</button>
        </div>
    </>, document.body
    ));
}

export default CardContextMenu;