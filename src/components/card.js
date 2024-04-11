function Card(props){
    // form for displaying cards
    return (
        <div id='card'>
            <div id='description'>{ props.description }</div>
            <div id='priority'>Priority { props.priority }</div>
            <div id='id'>#{ props.id } </div>
        </div>
    )
}

export default Card;