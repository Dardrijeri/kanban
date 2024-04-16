import ListLane from "./listlane";
import { useState } from "react";


function ListBody(props){
    const [showLanes, setShowLanes] = useState(false);
    let color = 'white';
    return (
        <>
            <div id="lane"><button onClick={() => setShowLanes(!showLanes)}>+</button>{props.header}</div>
            {
                /* nested loop to cycle through cards  */
                showLanes && props.filteredBoards.map((board) => {
                    return board.board.columns[props.id].cards.map((card, i) => {
                        switch(board.user.department){
                            case 'rtd':
                                color = 'red';
                                break;
                            case 'it':
                                color = 'green';
                                break;
                            case 'hr':
                                color = 'blue';
                                break;
                            default:
                                color = 'gray';
                        }
                        return <ListLane card={card} user={board.user} color={color} key={i} />
                    })
                })
            }
        </>
    )
}


export default ListBody;