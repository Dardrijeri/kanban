import { useState } from "react";
import ListBody from "./listbody";
import Select from 'react-select';


function ListView(props){
    const [departments, setDepartments] = useState([{value: ''}]);
    let filteredBoards = null;
    
    // filter boards based on departments
    filteredBoards = props.allBoards.filter((board) => departments.some((department) => board.user.department === department.value));

    // not sure about this, maybe should get it from board
    const headers = ['Back-log', 'To-Do', 'Review', 'Finished']

    const options = [
        { value: 'it', label: 'IT' },
        { value: 'rtd', label: 'R&D' },
        { value: 'hr', label: 'HR' },
    ];
    return (
        <>
            <Select onChange={setDepartments} options={options} isMulti />
            {headers.map((header, i) => {
                return <ListBody filteredBoards={filteredBoards} header={header} id={i} key={i} />
            })}
        </>
    )
}


export default ListView;