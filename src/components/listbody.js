import ListLane from "./listlane";
import { useState } from "react";

function ListBody(props){
    const [showLanes, setShowLanes] = useState(false);
    return (
        <>
            <div id="lane"><button onClick={() => setShowLanes(!showLanes)}>+</button>{props.header}</div>
            {
                /* nested loop to cycle through cards  */
                showLanes && props.filteredBoards.map((board) => {
                    return board.board.columns[props.id].cards.map((card) => {
                        return <ListLane card={card} user={board.user} />
                    })
                })
            }
        </>
    )
}


export default ListBody;