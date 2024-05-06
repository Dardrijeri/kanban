function ListDepartment(props){
    let color = 'gray';
    switch (props.value){
        case 'it':
            color = 'rgba(0, 0, 255, .5)';
            break;
        case 'rtd':
            color = 'rgba(60, 179, 113, .5)';
            break;
        case 'hr':
            color = 'rgba(255, 0, 0, .5)';
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
        <div className="lane-card" style={{borderColor: props.color}}>
            <div>{props.description}</div>
            <div className="date-lane">W{props.date.week}Y{props.date.year % 100}</div>
            <div className="priority-lane">{props.priority}</div>
            <img src={props.employeePic} alt="" />
        </div>
    )
}

export default ListDepartment;