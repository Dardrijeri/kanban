import Select from 'react-select';


function MainHeader(props){
    const weeks = Array(52).fill(1).map((x, y) => {return {value: x + y, label: x + y}});
    const years = Array(10).fill(2024).map((x, y) => {return {value: x + y, label: x + y}});
    return (
        <div className="main-header">
            <button style={props.viewType === 'board' ? {backgroundColor: 'green'}:{}} className="view-toggle" onClick={() => props.setViewType('board')}>Board view</button>
            <button style={props.viewType === 'list' ? {backgroundColor: 'green'}:{}} className="view-toggle" onClick={() => props.setViewType('list')}>List view</button>
            <button style={props.viewType === 'department' ? {backgroundColor: 'green'}:{}} className="view-toggle" onClick={() => props.setViewType('department')}>Department</button>
            <button style={props.viewType === 'personal' ? {backgroundColor: 'green'}:{}} className="view-toggle" onClick={() => props.setViewType('personal')}>Personal</button>
            Week:
            <Select classNamePrefix="react-select" className='date-select' name='week' options={weeks} defaultValue={{value: props.date.week, label: props.date.week}} onChange={(e) => props.setDate({week: e.value, year: props.date.year})}/>
            Year:
            <Select classNamePrefix="react-select" className='date-select' name='year' options={years} defaultValue={{label:props.date.year}} onChange={(e) => props.setDate({week: props.date.week, year: e.value})}/>
        
        </div>
    )
}

export default MainHeader;