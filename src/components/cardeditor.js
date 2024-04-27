import { createPortal } from "react-dom";

function CardEditor(props){
    function addNewCard(e){
        e.preventDefault();

        // get json from form
        const form = e.target;
        const formData = new FormData(form);
        const card = Object.fromEntries(formData.entries());

        // to-do part

        // post data, get new board from server
        
        // set board
        
        props.setShowEditor(false);
    }

    return (
        // edit form for new cards
        createPortal(
        <>
        <div className='back-drop' onClick={() => props.setShowEditor(false)}></div>
        <form method='post' className='editor' onSubmit={addNewCard}>
            <label htmlFor='description'>Description:</label>
            <textarea name='description' required className='description' defaultValue={props.description && props.description}/>
            
            {/* add markers? */}
            <label htmlFor='priority'>Priority:</label>    
            <select name='priority' className='priority' defaultValue={props.priority && props.priority}>
                <option value="critical">Critical</option>
                <option value="high-priority">High-priority</option>
                <option value="medium-priority">Medium-priority</option>
                <option value="low-priority">Low-priority</option>
            </select>
            
            <input type='submit' className='submit-card' />
        </form></>, document.body)
    );
}

export default CardEditor;