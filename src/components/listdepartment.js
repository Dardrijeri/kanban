function ListDepartment(props){
    let color = 'gray';
    switch (props.value){
        case 'it':
            color = 'blue';
            break;
        case 'rtd':
            color = 'green';
            break;
        case 'hr':
            color = 'yellow';
            break;
        default:
            color = 'gray';
    }
    return (
        props.cards.map((card, i) => <ListLane {...card } color={color} key={i} />)
    )
}

function ListLane(props){
    return (
        <div id="lane-card" style={{borderColor: props.color}}>
            <div>{props.description}</div>
            <div id="priority-lane">{props.priority}</div>
            <div id="avatar"><img src={props.employeePic} alt="" /></div>
        </div>
    )
}

export default ListDepartment;