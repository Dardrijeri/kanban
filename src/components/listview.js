import { useState } from "react";
import ListBody from "./listbody";

function ListView(props){
    const [department, setDepartment] = useState('all');
    let filteredBoards = null;
    
    // filter boards based on department
    if (department === 'all') {
        filteredBoards = props.allBoards;
    }
    else {
        filteredBoards = props.allBoards.filter((board) => board.user.department === department);
    }

    // not sure about this, maybe should get it from board
    const headers = ['Back-log', 'To-Do', 'Review', 'Finished']
    return (
        <>
            <select onChange={e => setDepartment(e.target.value)}>
                <option value='all'>All departments</option>
                <option value='it'>IT</option>
                <option value='rtd'>R&D</option>
                <option value='hr'>HR</option>
            </select>
            {headers.map((header, i) => {
                return <ListBody filteredBoards={filteredBoards} header={header} id={i} key={i} />
            })}
        </>
    )
}


export default ListView;