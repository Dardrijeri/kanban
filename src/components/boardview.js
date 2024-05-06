import { useState } from "react";
import { ControlledBoard } from "@caldwell619/react-kanban";
import ColumnHeader from "./columnheader";
import UserBoard from "./userboard";
import emptyBoard from "../test-data/emptyboard";
import board from "../test-data/data";


function BoardView(props){
    // sort to show current user board first
    // followed up by their department
    function sort(a, b){
        if (a.user.name === props.currentUser.name) return -1;
        if (b.user.name === props.currentUser.name) return 1;
        if (a.user.department === props.currentUser.department) return -1;
        return 1;
    }

    board.sort((a, b) => sort(a, b));
    const [allBoards, setAllBoards] = useState(board);
    
    return(
        <>
            {/* renders headers only */}
            <div className="hide-cards">
                <ControlledBoard disableColumnDrag allowAddCard={false}
                renderColumnHeader={(title) => {
                    return <ColumnHeader {...title} allBoards={allBoards} setAllBoards={setAllBoards} />
                }}
                >
                    {emptyBoard}
                </ControlledBoard>
            </div>
            
            {/* render boards for each user */}
            {allBoards.map((board, i) => {
                return <UserBoard {...board} key={i} date={props.date} render={i ? false : true} currentUser={props.currentUser} />
            })}
        </>
    )
}



export default BoardView;