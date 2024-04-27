import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './kanban';
import './index.css';


function App(){
    return (
        <Board />
    );
}

const root = ReactDOM.createRoot(document.getElementById('kanban'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);