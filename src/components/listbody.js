import ListDepartment from "./listdepartment";
import { useState } from "react";


function ListBody(props){
    const filteredData = props.data.filter((node) => props.departments.some((department) => department.value === node.value));


    const [showLanes, setShowLanes] = useState(true);
    return (
        <>
            <div className="list-separator-lane"><button className="toggle" onClick={() => setShowLanes(!showLanes)}><img src={showLanes ? '/images/up-arrow.svg' : '/images/down-arrow.svg'} alt=""/></button>{props.header}</div>
            {showLanes && filteredData.map((node, i) => <ListDepartment key={i} value={node.value} cards={node.cards} />)}
        </>
    )
}


export default ListBody;