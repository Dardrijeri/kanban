import { useState } from "react";
import Card from "./card";
import ColumnHeader from "./columnheader";
import { ControlledBoard, moveCard } from "@caldwell619/react-kanban";
import board from "../test-data/departmentboard";

function DepartmentView(props){
    // toggle for Dropped column
    const [showDropped, setShowDropped] = useState(false);
    // changes what to get from server

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

    const [departmentBoard, setDepartmentBoard] = useState({...board});

    function handleCardMove(_card, source, destination) {
        // forbids changing order and questionable actions
        if (source.fromColumnId === destination.toColumnId || _card.employee === '' || !_card.employee
            || destination.toColumnId === 1) return;
        
        // if task is pulled from backlog, sets date for task
        if (source.fromColumnId === 1) {
            if (props.date.year < props.currentYear || props.date.week < props.currentWeek) {
                alert("You can't put task in the past");
                return;
            }
            if (props.date.year > props.currentYear || props.date.week > props.currentWeek) {
                const answer = window.confirm("Are you sure you want to move the task into the future?")
                if (!answer) return;
            }
            _card.date = {week: props.date.week, year: props.date.year}
        }

        const updatedBoard = moveCard(departmentBoard, source, destination);  
        setDepartmentBoard(updatedBoard);
        // maybe should sort here
    }



    return ( 
        <ControlledBoard disableColumnDrag allowAddCard={false} onCardDragEnd={handleCardMove} disableCardDrag = {props.currentUser.role !== 'manager'}
        renderColumnHeader={(title) => {
            return <ColumnHeader {...title} board={departmentBoard} setBoard={setDepartmentBoard} allowEdit = {props.currentUser.role === 'manager'} setShowDropped={setShowDropped} showDropped={showDropped} />
        }}
        renderCard={(card) => {
            return <Card {...card} board={departmentBoard} setBoard={setDepartmentBoard} selectedDate={props.date} disableContext = {props.currentUser.role !== 'manager'} />
        }}
        >
            {departmentBoard}
        </ControlledBoard>);
}

export default DepartmentView;