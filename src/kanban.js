import { useState } from 'react';
import ListView from './components/listview';
import MainHeader from './components/mainheader';
import PersonalView from './components/personalview';
import DepartmentView from './components/departmentview';
import BoardView from './components/boardview';
import user from './test-data/user-test-data';


function Board() {
    // change view
    const [viewType, setViewType] = useState('board');

    // year and week state
    const [date, setDate] = useState({week: 1, year: 2024})

    function switchView(view){
        switch(view) {
            case 'board': return <BoardView date={date} />
            case 'list': return <ListView date={date} />
            case 'department': return <DepartmentView date={date} />
            case 'personal': return <PersonalView date={date} />
            default: return 'Error'
        }
    }

    return (
        <>
        <MainHeader setViewType={setViewType} date={date} setDate={setDate} />
        {/* change representation on condition */}
        { switchView(viewType) }
        </>

    )
}


export default Board;