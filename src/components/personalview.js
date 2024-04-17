import Card from "./card";
import ColumnHeader from "./columnheader";
import { ControlledBoard } from "@caldwell619/react-kanban";
import board from "../test-data/data";


function PersonalView(props){
    let allBoards, setAllBoards;
    return ( 
        <ControlledBoard disableColumnDrag allowAddCard={false}
        renderColumnHeader={(title) => {
            return <ColumnHeader {...title} allBoards={allBoards} setAllBoards={setAllBoards} />
        }}
        renderCard={(card) => {
                return <Card {...card} selectedDate={props.date} />
        }}
        >
            {board[0].board}
        </ControlledBoard>);
}

export default PersonalView;