import { useState } from 'react';
import { ControlledBoard } from '@caldwell619/react-kanban';
import emptyBoard from './test-data/emptyboard';
import board from './test-data/data';
import ColumnHeader from './components/columnheader';
import UserBoard from './components/userboard';
import ListView from './components/listview';
import MainHeader from './components/mainheader';


function Board() {
    // should get data from server
    const [allBoards, setAllBoards] = useState(board);

    // toggle view
    const [boardView, setBoardView] = useState(true);


    return (
        <>
        <MainHeader setBoardView={setBoardView} />
        {/* change representation on condition */}
        { boardView
        ?
            <>
                {/* renders board view */}
                {/* renders headers only */}
                <ControlledBoard disableColumnDrag allowAddCard={false}
                renderColumnHeader={(title) => {
                    return <ColumnHeader {...title} allBoards={allBoards} setAllBoards={setAllBoards} />
                }}
                >
                    {emptyBoard}
                </ControlledBoard>
                {/* render boards for each user */}
                {board.map((board, i) => {
                    return <UserBoard {...board} key={i}/>
                })}
            </>
        :
            <>
                {/* renders list view */}
                <ListView allBoards={allBoards} />
            </>
        }
        </>

    )
    
}


export default Board;