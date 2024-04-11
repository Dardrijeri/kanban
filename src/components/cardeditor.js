import { addCard } from '@caldwell619/react-kanban';


function CardEditor(props){
    function AddCard(e){
        e.preventDefault();

        // get json from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const card = formJson;
        
        card.id = FindAvailableId(props.passBoard);
        
        // addCard is built-in function, just searches and inserts card
        const updatedBoard = addCard(props.passBoard, {id: 1}, card);
        props.passSetBoard(updatedBoard);
        props.passSetShowEditor(!props.passShowEditor);
        // add post to server in a future
    }

    function FindAvailableId(board){
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
        <form method='post' id='editor' onSubmit={AddCard}>
            <label>
                Description:
                <input type='text' name='description' />
            </label>
            <label>
                Priority:
                <input type='text' name='priority' />
            </label>
            <label>
                Employee:
                <input type='text' name='employee' />
            </label>
            <input type='submit' id='submitcard' />
        </form>
    );
}

export default CardEditor;