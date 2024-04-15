function MainHeader(props){
    return (
        <div id="main-header">
            <button className="view-toggle" onClick={() => props.setBoardView(true)}>Board view</button>
            <button className="view-toggle" onClick={() => props.setBoardView(false)}>List view</button>
        </div>
    )
}

export default MainHeader;