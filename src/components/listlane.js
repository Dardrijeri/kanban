function ListLane(props){

    let color = 'black';
    switch(props.card.priority){
        case 'critical': color ='red';
        break;
        case 'low-priority': color = 'green';
        break;
        case 'high-priority': color = 'orange';
        break;
        case 'medium-priority': color = 'yellow';
        break;
        default: color = 'black';
    }

    return (
        <div id='lane-card'>
            <div id='description-lane'>{props.card.description}</div>
            <div id='priority-lane' style={{color: color}}>{props.card.priority}</div>
            <div id='avatar'><img src={props.user.image} alt='avatar'/></div>
        </div>
    )
}


export default ListLane;