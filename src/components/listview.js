import { useState } from "react";
import ListBody from "./listbody";
import Select from 'react-select';


function ListView(props){
    const [department, setDepartment] = useState({value: 'all'});
    let filteredBoards = null;
    
    // filter boards based on department
    if (department.value === 'all') {
        filteredBoards = props.allBoards;
    }
    else {
        filteredBoards = props.allBoards.filter((board) => board.user.department === department.value);
    }

    // not sure about this, maybe should get it from board
    const headers = ['Back-log', 'To-Do', 'Review', 'Finished']

    const options = [
        { value: 'all', label: 'All departments' },
        { value: 'it', label: 'IT' },
        { value: 'rtd', label: 'R&D' },
        { value: 'hr', label: 'HR' },
    ];
    console.log(department);
    return (
        <>
            <Select onChange={setDepartment} options={options} />
            {headers.map((header, i) => {
                return <ListBody filteredBoards={filteredBoards} header={header} id={i} key={i} />
            })}
        </>
    )
}


export default ListView;