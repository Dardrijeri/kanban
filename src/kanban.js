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

    // get current week
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
 
    // year and week state
    const [date, setDate] = useState({week: week, year: now.getFullYear()})

    function switchView(view){
        switch(view) {
            case 'board': return <BoardView date={date} currentUser={user} />
            case 'list': return <ListView date={date} />
            case 'department': return <DepartmentView date={date} currentWeek={week} currentYear={now.getFullYear()} currentUser={user} />
            case 'personal': return <PersonalView date={date} currentUser={user} />
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