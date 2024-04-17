import Select from 'react-select';


function MainHeader(props){
    const weeks = Array(52).fill(1).map((x, y) => {return {value: x + y, label: x + y}});
    const years = Array(10).fill(2024).map((x, y) => {return {value: x + y, label: x + y}});
    return (
        <div id="main-header">
            <button className="view-toggle" onClick={() => props.setBoardView('board')}>Board view</button>
            <button className="view-toggle" onClick={() => props.setBoardView('list')}>List view</button>
            <button className="view-toggle" onClick={() => props.setBoardView('department')}>Department</button>
            <button className="view-toggle" onClick={() => props.setBoardView('personal')}>Personal</button>
            Week:
            <Select className='date-select' name='week' options={weeks} onChange={(e) => props.setDate({week: e.value, year: props.date.year})}/>
            Year:
            <Select className='date-select' name='year' options={years} onChange={(e) => props.setDate({week: props.date.week, year: e.value})}/>
        
        </div>
    )
}

export default MainHeader;