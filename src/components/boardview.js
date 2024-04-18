import { useState } from "react";
import { ControlledBoard } from "@caldwell619/react-kanban";
import ColumnHeader from "./columnheader";
import UserBoard from "./userboard";
import emptyBoard from "../test-data/emptyboard";
import board from "../test-data/data";


function BoardView(props){
    const [allBoards, setAllBoards] = useState(board);

    return(
        <>
            {/* renders headers only */}
            <ControlledBoard disableColumnDrag allowAddCard={false}
            renderColumnHeader={(title) => {
                return <ColumnHeader {...title} allBoards={allBoards} setAllBoards={setAllBoards} />
            }}
            >
                {emptyBoard}
            </ControlledBoard>
            
            {/* render boards for each user */}
            {allBoards.map((board, i) => {
                return <UserBoard {...board} key={i} date={props.date}/>
            })}
        </>
    )
}


export default BoardView;