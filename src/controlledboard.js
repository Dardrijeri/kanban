import { useState } from 'react';
import { ControlledBoard } from '@caldwell619/react-kanban';
import emptyBoard from './test-data/emptyboard';
import board from './test-data/data';
import ColumnHeader from './components/columnheader';
import UserBoard from './components/userboard';


function Board() {
    // should get data from server
    const [allBoards, setAllBoards] = useState(board);

    return (
        <>
        {/* renders headers only */}
        <ControlledBoard disableColumnDrag allowAddCard={false}
        renderColumnHeader={(title) => {
            return <ColumnHeader {...title} allBoards={allBoards} setAllBoards={setAllBoards} />
        }}>
            {emptyBoard}
        </ControlledBoard>
        {/* render boards for each user */}
        {board.map((board) => {
            return <UserBoard {...board} />
        })}
        </>
    );
}


export default Board;