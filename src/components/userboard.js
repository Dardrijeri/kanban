import { useState } from 'react';
import { ControlledBoard, moveCard } from '@caldwell619/react-kanban';
import Card from './card';
import Swimlane from './swimlane';

function UserBoard(props){
    // pre-filter board with current week and year
    let filteredBoard = {...props.board};
    filteredBoard.columns = props.board.columns.map((column) => ({...column, cards: column.cards.filter((card) => (card.date.year === props.date.year & card.date.week === props.date.week)), }));

    // current user's board
    const [controlledBoard, setBoard] = useState(filteredBoard);

    // filter board if week or year changes
    const [prevDate, setPrevDate] = useState(props.date);
    if (props.date !== prevDate) {
        filteredBoard = {...props.board};
        filteredBoard.columns = props.board.columns.map((column) => ({...column, cards: column.cards.filter((card) => (card.date.year === props.date.year & card.date.week === props.date.week)), }));
        setBoard(filteredBoard);
        setPrevDate(props.date);
    }

    // toggle for rendering board
    const [renderBoard, setRenderBoard] = useState(props.render);

    // need to post data to server
    // also should ignore order changes, since it is difficult to store order on backend
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }
    
    return (
        // prints separator and boards for users
        <>
            <Swimlane {...props.user} renderBoard={renderBoard} setRenderBoard={setRenderBoard} />
            {renderBoard && <ControlledBoard onCardDragEnd={handleCardMove} disableColumnDrag allowAddCard={false}
            renderCard={(card) => {
                return <Card {...card} selectedDate={props.date} />
            }}
            renderColumnHeader={() => {}}
            >
                {controlledBoard}
            </ControlledBoard>}
        </>

    )
    
}

export default UserBoard;