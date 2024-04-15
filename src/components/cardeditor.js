function CardEditor(props){
    function addNewCard(e){
        e.preventDefault();

        // get json from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const card = formJson;

        // get board for user
        const isValidUser = (element) => element.user.name === card['employee'];
        const boardIndex = props.allBoards.findIndex(isValidUser);
        
        // assigns correct id to card 
        card.id = findAvailableId(props.allBoards[boardIndex].board);        
        
        // inserts card in first column for correct user
        let updatedBoard = [...props.allBoards];
        updatedBoard[boardIndex].board.columns[0].cards.splice(0, 0, card);
        
        props.setAllBoards(updatedBoard);
        props.passSetShowEditor(!props.passShowEditor);
        // add post to server in a future
    }

    function findAvailableId(board){
        // looks for highest id on board
        let max = 0;
        for (const column of board.columns) {
            for (const card of column.cards) {
                if (card.id > max) max = card.id;
            }
        }
        return max + 1;
    }

    return (
        // edit form for new cards
        <form method='post' id='editor' onSubmit={addNewCard}>
            <label htmlFor='description'>Description:</label>
            <textarea name='description' required id='description'/>
            
            {/* add markers? */}
            <label htmlFor='priority'>Priority:</label>    
            <select name='priority' id='priority'>
                <option value="critical">Critical</option>
                <option value="high-priority">High-priority</option>
                <option value="medium-priority">Medium-priority</option>
                <option value="low-priority">Low-priority</option>
            </select>
            
            {/* need to change */}
            <label htmlFor='employee'>Employee:</label>
            <select name='employee' id='employee'>
                <option>Harold</option>
                <option>John</option>
                <option>David</option>
            </select>
            <input type='submit' id='submitcard' />
        </form>
    );
}

export default CardEditor;