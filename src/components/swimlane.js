function Swimlane(props){
    return (
        <div className='swimlane'>
            <button type='button' className='toggle' onClick={() => props.setRenderBoard(!props.renderBoard)}>
                <img src={props.renderBoard ? '/images/up-arrow.svg' : '/images/down-arrow.svg'} className='button' alt='Close' />
            </button>
            <img src={props.image} alt='Avatar'/>
            {props.name}
        </div>
    )
}

export default Swimlane