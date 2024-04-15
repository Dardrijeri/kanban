function Swimlane(props){
    return (
        <div id='swimlane'>
            <button type='button' id='toggle' onClick={() => props.setRenderBoard(!props.renderBoard)}>
                {props.renderBoard ? 
                <img src='/images/up-arrow.png' className='button' alt='Close' /> : 
                <img src='/images/down-arrow.png' className='button' alt='Open' />}
            </button>
            <img src={props.image} alt='Avatar'/>
            {props.name}
        </div>
    )
}

export default Swimlane