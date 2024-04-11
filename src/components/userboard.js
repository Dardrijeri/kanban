import { useState } from 'react';
import { ControlledBoard, moveCard } from '@caldwell619/react-kanban';
import board from '../test-data/data';
import Card from './card';
import Swimlane from './swimlane';

function UserBoard(props){
    // current user's board
    const [controlledBoard, setBoard] = useState(props.board);
    
    // toggle for rendering board
    const [renderBoard, setRenderBoard] = useState(true);

    // need to post data to server
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }
    return (
        <>
            <Swimlane {...props.user} renderBoard={renderBoard} setRenderBoard={setRenderBoard} />
            {renderBoard && <ControlledBoard onCardDragEnd={handleCardMove} disableColumnDrag allowAddCard={false}
            renderCard={(card) => {
                return <Card {...card} />
            }}
            renderColumnHeader={() => {}}
            >
                {controlledBoard}
            </ControlledBoard>}
        </>

    )
    
}

export default UserBoard;