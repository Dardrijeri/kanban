import { useState } from "react";
import Card from "./card";
import ColumnHeader from "./columnheader";
import { ControlledBoard } from "@caldwell619/react-kanban";
import testPersonal from "../test-data/personalboard";


function PersonalView(props){
    const [personalBoard, setPersonalBoard] = useState(testPersonal);

    return ( 
        <ControlledBoard disableColumnDrag allowAddCard={false}
        renderColumnHeader={(title) => {
            return <ColumnHeader {...title} allBoards={personalBoard} setAllBoards={setPersonalBoard} allowEdit />
        }}
        renderCard={(card) => {
                return <Card {...card} selectedDate={props.date} />
        }}
        >
            {personalBoard}
        </ControlledBoard>);
}

export default PersonalView;