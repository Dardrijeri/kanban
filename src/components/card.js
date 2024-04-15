function Card(props){
    // form for displaying cards
    let color = 'white';
    switch(props.priority){
        case 'critical': color ='red';
        break;
        case 'low-priority': color = 'green';
        break;
        case 'high-priority': color = 'orange';
        break;
        case 'medium-priority': color = 'yellow';
        break;
        default: color = 'white';
    }
    return (
        <div id='card' style={{borderColor: color}}>
            <div id='description'>{ props.description }</div>
            <div id='priority' style={{backgroundColor: color}}></div>
            <div id='id'>#{ props.id } </div>
        </div>
    )
}

export default Card;