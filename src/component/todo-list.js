import React from 'react'

import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {

    const  elements = todos.map((item) => {

        const  {id, ...itemProps} = item;

        return(
            <li key = {id} className="list-group">
                < TodoListItem { ... itemProps }/>
            </li>

        );
    });
    return(
       <ul className="list-group toto-list">
           { elements }
       </ul>
    );
};

export default TodoList;