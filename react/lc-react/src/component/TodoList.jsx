import React from 'react';

function TodoList(props) {
    const { todoListAfterFilter, todoCheckBoxFunc, removeTodoFromTodoListFunc } = props;

    const todoCheckBox = (e,id) => {
        todoCheckBoxFunc(e,id);
    }
    const removeTodoFromTodoList = (id) => {
        removeTodoFromTodoListFunc(id);
    }

    return (
        <ul className="todo-list">
            {
                todoListAfterFilter.map( (todo, index) => (
                        <li key={todo.id} className={ `todo-item-container ${ todo.isComplete ? "line-through" : "" }` }>
                            <div className="todo-item">
                            <input checked={ todo.isComplete } type="checkbox" onChange={(e) => todoCheckBox(e, todo.id) } />
                                <span className="todo-item-label">{ todo.title }</span>
                            </div>
                            <button onClick={ () => removeTodoFromTodoList(todo.id) } className="x-button">
                                <svg className="x-button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </li>
                    ))
            }
        </ul>
    );
}

export default TodoList;