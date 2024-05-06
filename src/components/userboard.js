import { useState } from 'react';
import { ControlledBoard, moveCard } from '@caldwell619/react-kanban';
import Card from './card';
import Swimlane from './swimlane';

function UserBoard(props){
    props.board.columns.forEach((column) => column.cards.sort((a, b) => {
        let priority = {
            'critical': 3,
            'high-priority': 2,
            'medium-priority': 1,
            'low-priority': 0
        }
        return (priority[b.priority] - priority[a.priority])
    }))

    // current user's board
    const [controlledBoard, setBoard] = useState(props.board);

    // toggle for rendering board
    const [renderBoard, setRenderBoard] = useState(props.render);

    // need to post data to server
    function handleCardMove(_card, source, destination) {
        // able to move only between second and third column
        if ((source.fromColumnId !== 2 || destination.toColumnId !== 3) & (source.fromColumnId !== 3 || destination.toColumnId !== 2)) return;
        
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }
    
    return (
        // prints separator and boards for users
        <>
            <Swimlane {...props.user} renderBoard={renderBoard} setRenderBoard={setRenderBoard} />
            {renderBoard && <ControlledBoard onCardDragEnd={handleCardMove} disableColumnDrag allowAddCard={false} disableCardDrag={props.currentUser.name !== props.user.name}
            renderCard={(card) => {
                return <Card {...card} selectedDate={props.date} disableContext />
            }}
            renderColumnHeader={() => {}}
            >
                {controlledBoard}
            </ControlledBoard>}
        </>

    )
    
}

export default UserBoard;