import { useState } from "react";
import ListBody from "./listbody";
import Select from 'react-select';
import data from "../test-data/list-test";


function ListView(props){
    const [departments, setDepartments] = useState([{value: ''}]);
    
    // get departments from data
    const options = data[0].departments.map((node) => ({label: node.label, value: node.value}))
    
    return (
        <>
            <Select onChange={setDepartments} options={options} isMulti />
            { data.map((header, i) => <ListBody key={i} header={header.title} data={header.departments} departments={departments} />) }
        </>
    )
}


export default ListView;