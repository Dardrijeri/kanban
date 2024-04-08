import * as React from 'react';
import { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { extend } from '@syncfusion/ej2-base';


function App() {
    let data = new DataManager({
        url: 'http://localhost:8000/kanban/data/',
        updateUrl: 'http://localhost:8000/kanban/update/',
        insertUrl: 'http://localhost:8000/kanban/insert/',
        removeUrl: 'http://localhost:8000/kanban/delete/',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    });

    function dialogTemplate(props) {
        return (<KanbanDialogFormTemplate {...props}/>);
    }

    function columnTemplate(props){
        return (
            <div className='header-template-wrap'>
                <div className='header-text'>{ props.headerText }</div>
                <div className='add-button'>
                    { <ButtonComponent id="addNew" className="e-btn e-dialog-add" onClick={addClick.bind(this)}>
                        Add New Card
                    </ButtonComponent> }
                </div>
            </div>
        );
    }

    let kanbanObj = useRef(null);
    const addClick = () => {
        const cardIds = kanbanObj.current.kanbanData.map((obj) => parseInt(obj.Id));
        const cardCount = Math.max.apply(Math, cardIds) + 1;
        const cardDetails = {
            Id: cardCount,
            Status: "Open",
            Priority: "Normal",
            Assignee: "Andrew Fuller",
            Estimate: 0,
            Tags: "",
            Summary: "",
        };
        kanbanObj.current.openDialog("Add", cardDetails);
    };


    return (<KanbanComponent id="kanban" ref={kanbanObj} keyField="status" dataSource={data} cardSettings={{ contentField: "description", headerField: "Id" }} dialogSettings={{ template: dialogTemplate.bind(this) }}>
        <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open" template={ columnTemplate.bind(this) }/>
            <ColumnDirective headerText="In Progress" keyField="InProgress" template={ columnTemplate.bind(this) } />
            <ColumnDirective headerText="Testing" keyField="Testing" template={ columnTemplate.bind(this) } />
            <ColumnDirective headerText="Done" keyField="Close" template={ columnTemplate.bind(this) } />
        </ColumnsDirective>
    </KanbanComponent>);
}
export default App;

function KanbanDialogFormTemplate(props) {
    let assigneeData = [
        'Nancy Davloio', 'Andrew Fuller', 'Janet Leverling',
        'Steven walker', 'Robert King', 'Margaret hamilt', 'Michael Suyama'
    ];
    let statusData = ['Open', 'InProgress', 'Testing', 'Close'];
    let priorityData = ['Low', 'Normal', 'Critical', 'Release Breaker', 'High'];
    let tagsHtmlAttributes = { name: "Tags" };
    const [state, setState] = React.useState(extend({}, {}, props, true));
    function onChange(args) {
        let key = args.target.name;
        let value = args.target.value;
        setState({ [key]: value });
    }
    let data = state;
    return (<div>
          <table>
              <tbody>
                  <tr>
                      <td className="e-label">ID</td>
                      <td>
                          <div className="e-float-input e-control-wrapper">
                              <input id="Id" name="Id" type="text" className="e-field" value={data.Id} disabled/>
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Status</td>
                      <td>
                          <DropDownListComponent id='Status' name="Status" dataSource={statusData} className="e-field" placeholder='Status' value={data.Status}></DropDownListComponent>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Assignee</td>
                      <td>
                          <DropDownListComponent id='Assignee' name="Assignee" className="e-field" dataSource={assigneeData} placeholder='Assignee' value={data.Assignee}></DropDownListComponent>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Priority</td>
                      <td>
                          <DropDownListComponent type="text" name="Priority" id="Priority" popupHeight='300px' className="e-field" value={data.Priority} dataSource={priorityData} placeholder='Priority'></DropDownListComponent>
                      </td>
                  </tr>
                  <tr>
                      <td className="e-label">Summary</td>
                      <td>
                          <div className="e-float-input e-control-wrapper">
                              <textarea name="Summary" className="e-field" value={data.Summary} onChange={onChange.bind(this)}></textarea>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>);
}


const root = createRoot(document.getElementById('kanban'));
root.render(<App />);
