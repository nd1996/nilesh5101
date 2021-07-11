import React, { useState, useRef } from 'react';
/* Todo Style */
import "./../componentAsset/todoStyle.css";
import NoTodo from './NoTodo';
import TodoList from './TodoList';
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Todo() {

    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "Finish react Series",
            isComplete: false
        },
        {
            id: 2,
            title: "I will Learn React and Node in depth",
            isComplete: false
        },
        {
            id: 3,
            title: "I will master Magento no matter what its take",
            isComplete: true
        },
    ]);

    /* 
        * 1 = All
        * 2 = Active (isComplete === false)
        * 3 = Complete (isComplete === true)
    */
    const [todoFilter, setTodoFilter] = useState(1);

    /* 
        * Use for Input Field to get the value
    */
    const todoInput = useRef();

    const cssTransitionRef = useRef(null);

    const todoCheckBox = (e, id) => {
        // let newTodoList = [...todoList];
        let checkedVal = (e.target.checked === true) ? true : false;
        // By using filterIndex function
        // let getIndexNewTodoList = newTodoList.findIndex(todo => todo.id === id);
        // newTodoList[getIndexNewTodoList].isComplete = checkedVal;
        // setTodoList(prevTodoList => newTodoList);
        // By using map filter function
        setTodoList(prevTodoList => prevTodoList.map( (todo) => {
            if (todo.id === id) todo.isComplete = checkedVal;
            return todo;
        }));
        // console.log(checkedVal);
    }

    const completeAllTodoFromTodoList = () => {
        setTodoList(prevTodoList => prevTodoList.map( (todo) => {
            todo.isComplete = true;
            return todo;
        }));
    }
    
    const activeAllTodoFromTodoList = () => {
        setTodoList(prevTodoList => prevTodoList.map( (todo) => {
            todo.isComplete = false;
            return todo;
        }));
    }

    const removeTodoFromTodoList = (id) => {
        setTodoList(prevTodoList => prevTodoList.filter((todo) => todo.id !== id));
    }

    const removeAllCompleteTodoFromTodoList = () => {
        setTodoList(prevTodoList => prevTodoList.filter((todo) => todo.isComplete !== true ));
    }

    const getTodoActiveCount = () => {
        let newTodoList = [...todoList];
        let filterNewTodoList =  newTodoList.filter(todo => todo.isComplete === false);
        // console.log(filterNewTodoList);
        return filterNewTodoList.length;
    }

    const todoListAfterFilter = () => {
        let newTodoList = [...todoList];
        if( todoFilter === 2) return newTodoList.filter(todo => todo.isComplete === false);
        if( todoFilter === 3) return newTodoList.filter(todo => todo.isComplete === true);
        return newTodoList;
    }

    const filterTodoList = (val) => {
        // console.log(val);
        setTodoFilter(prevTodoFilter => val);

    }

    const addNewTodoToTodoList = (e) => {
        e.preventDefault();
        let getInputVal = todoInput.current.value;
        // console.log(getInputVal);
        let getTodoListArrayLength = todoList.length;
        let newTodo = {
            id: getTodoListArrayLength + 1,
            title: getInputVal,
            isComplete: false
        }
        if (getInputVal.length) {
            setTodoList(prevTodoList => [...prevTodoList, newTodo]);
            todoInput.current.value = "";
        }
    }

    return (
        <div className="container todo-app-container">
            <div className="todo-app">
                <h2>Todo App</h2>
                <form action="#" onSubmit={ e => addNewTodoToTodoList(e) }>
                    <input ref={ todoInput } type="text" className="todo-input" placeholder="What do you need to do? Type and Enter" />
                </form>

                {/* Listing */}
                <SwitchTransition mode="out-in">
                    <CSSTransition nodeRef={ cssTransitionRef } key={todoListAfterFilter().length > 0} timeout={300} classNames="slide-vertical" unmountOnExit >
                        {todoListAfterFilter().length > 0 ? <TodoList todoListAfterFilter={todoListAfterFilter()} todoCheckBoxFunc={todoCheckBox} removeTodoFromTodoListFunc={ removeTodoFromTodoList } /> : <NoTodo todoFilterProp={ todoFilter } />
                    }
                    </CSSTransition>
                </SwitchTransition>

                {/* Main Container */}
                <div className="check-all-container">
                    <div className="flex-side-by-side">
                        <div className="button side-by-side" onClick={ () => completeAllTodoFromTodoList() }>Check All</div>
                        <div className="button" onClick={ () => activeAllTodoFromTodoList() }>Active All</div>
                    </div>
                    <span> { getTodoActiveCount() } item remaining</span>
                </div>
                <div className="other-buttons-container">
                    <div>
                        <button className={`button filter-button ${todoFilter === 1 ? "filter-button-active" : ""}`} onClick={ () => filterTodoList(1) }>All</button>
                        <button className={`button filter-button ${todoFilter === 2 ? "filter-button-active" : ""}`} onClick={ () => filterTodoList(2) }>Active</button>
                        <button className={`button filter-button ${todoFilter === 3 ? "filter-button-active" : ""}`} onClick={ () => filterTodoList(3) }>Completed</button>
                    </div>
                    <div>
                        <button onClick={ () => removeAllCompleteTodoFromTodoList() } className="button">Clear completed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;