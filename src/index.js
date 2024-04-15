import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './kanban';
import './index.css';
import '@caldwell619/react-kanban/dist/styles.css';


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