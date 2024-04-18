import { useState } from "react";
import Card from "./card";
import ColumnHeader from "./columnheader";
import { ControlledBoard, moveCard } from "@caldwell619/react-kanban";
import board from "../test-data/departmentboard";

function DepartmentView(props){
    const [departmentBoard, setDepartmentBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(departmentBoard, source, destination);
        setDepartmentBoard(updatedBoard);
    }

    return ( 
        <ControlledBoard disableColumnDrag allowAddCard={false} onCardDragEnd={handleCardMove} disableCardDrag
        renderColumnHeader={(title) => {
            return <ColumnHeader {...title} allBoards={departmentBoard} setAllBoards={setDepartmentBoard} />
        }}
        renderCard={(card) => {
                return <Card {...card} selectedDate={props.date} />
        }}
        >
            {departmentBoard}
        </ControlledBoard>);
}

export default DepartmentView;