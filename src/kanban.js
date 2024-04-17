import { useState } from 'react';
import { ControlledBoard } from '@caldwell619/react-kanban';
import emptyBoard from './test-data/emptyboard';
import board from './test-data/data';
import ColumnHeader from './components/columnheader';
import UserBoard from './components/userboard';
import ListView from './components/listview';
import MainHeader from './components/mainheader';
import PersonalView from './components/personalview';
import DepartmentView from './components/departmentview';


function Board() {
    // should get data from server
    const [allBoards, setAllBoards] = useState(board);

    // toggle view
    const [boardView, setBoardView] = useState('board');

    // year and week state
    const [date, setDate] = useState({week: 1, year: 2024})

    function switchView(view){
        switch(view) {
            case 'board': return (
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
                        return <UserBoard {...board} key={i} date={date}/>
                    })}
                </>)
            case 'list': return <ListView allBoards={allBoards} />
            case 'department': return <DepartmentView allBoard={allBoards} />
            case 'personal': return <PersonalView />
            default: return 'Error'
        }
    }

    return (
        <>
        <MainHeader setBoardView={setBoardView} date={date} setDate={setDate} />
        {/* change representation on condition */}
        { switchView(boardView) }
        </>

    )
    
}


export default Board;