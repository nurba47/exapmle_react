import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './component/app-header';
import SearchPanel from  './component/search-panels';
import TodoList from  './component/todo-list';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

    return(
    <div>
        <AppHeader/>
        <TodoList todos={todoData}/>
        <SearchPanel/>
    </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
