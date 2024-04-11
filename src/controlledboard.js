import { useState } from 'react';
import { ControlledBoard, moveCard } from '@caldwell619/react-kanban';
import board from './data';
import Card from './components/card'
import ColumnHeader from './components/columnheader';


function Board() {
    // should get data from server
    const [controlledBoard, setBoard] = useState(board);
  
    // need to post data to server
    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);
    }

    return (
        <>
        <ControlledBoard onCardDragEnd={handleCardMove} disableColumnDrag allowAddCard={false}
        renderCard={(card) => {
            return <Card {...card} />
        }}
        renderColumnHeader={(title) => {
            return <ColumnHeader {...title} passBoard={controlledBoard} passSetBoard={setBoard} />
        }}
        >
            {controlledBoard}
        </ControlledBoard>
        </>
    );
}


export default Board;