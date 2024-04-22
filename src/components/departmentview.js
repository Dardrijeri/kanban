import { useState } from "react";
import Card from "./card";
import ColumnHeader from "./columnheader";
import { ControlledBoard, moveCard } from "@caldwell619/react-kanban";
import board from "../test-data/departmentboard";

function DepartmentView(props){
    // sort backlog based on priority
    board.columns[0].cards.sort((a, b) => {
        let priority = {
            'critical': 3,
            'high-priority': 2,
            'medium-priority': 1,
            'low-priority': 0
        }
        return (priority[b.priority] - priority[a.priority])
    })
    
    // sort backlog based on if employee is selected
    board.columns[0].cards.sort((a, b) => {
        if (a.employee) return -1
        if (b.employee) return 1
        return 0
    })

    const [departmentBoard, setDepartmentBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
        // forbids changing order and moving cards without employee
        if (source.fromColumnId === destination.toColumnId || _card.employee === '' || !_card.employee) return;
        const updatedBoard = moveCard(departmentBoard, source, destination);
        setDepartmentBoard(updatedBoard);
        // maybe should sort here
    }

    return ( 
        <ControlledBoard disableColumnDrag allowAddCard={false} onCardDragEnd={handleCardMove} disableCardDrag = {props.currentUser.role !== 'manager'}
        renderColumnHeader={(title) => {
            return <ColumnHeader {...title} allBoards={departmentBoard} setAllBoards={setDepartmentBoard} allowEdit = {props.currentUser.role === 'manager'} />
        }}
        renderCard={(card) => {
                return <Card {...card} board={departmentBoard} setBoard={setDepartmentBoard} selectedDate={props.date} disableContext = {props.currentUser.role !== 'manager'} />
        }}
        >
            {departmentBoard}
        </ControlledBoard>);
}

export default DepartmentView;