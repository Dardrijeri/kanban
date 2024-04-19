import Select from 'react-select';
import { useState } from 'react';


function CardContextMenu(props){
    const [showSelect, setShowSelect] = useState(false);
    console.log(props)

    const options = [
                        {value: 'John', label: 'John'},
                        {value: 'Harold', label: 'Harold'},
                        {value: 'David', label: 'David'},
                    ]
    
    // closes menu if clicked outside
    function onClickOutsideListener() {
        props.setShowContextMenu(false);
        document.removeEventListener('click', onClickOutsideListener);
    }

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
    

    return (
    <div className="context-menu" 
    onMouseLeave={() => document.addEventListener('click', onClickOutsideListener)}
    onMouseEnter={() => document.removeEventListener('click', onClickOutsideListener)}
    >
        <button>Edit card</button>
        { showSelect ? 
        <Select onChange={(e) => selectEmployee(e)} options={options}/> 
        : 
        <button onClick={() => setShowSelect(true)}>Select employee</button>
        }
    </div>
    );
}

export default CardContextMenu;