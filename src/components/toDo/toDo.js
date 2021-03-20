import React from "react"
import './toDo.scss';

import Button from '@material-ui/core/Button';


export default class ToDo extends React.Component {
    state = {
        todoList: [],
        todo: { text: '', category: 'Coding' },
        filter: 'All',
    };
    
    addTodo = () => {
        let newTodoList = this.state.todoList;
        newTodoList.push(this.state.todo);
        this.setState({
            todo: { text: '', category: this.state.todo.category },
            todoList: newTodoList,
        });
    };

    putOneTodo = (e) => {
        this.setState({
            todo: {
                text: e.target.value,
                category: this.state.todo.category,
            },
        });
    };

    putOneCategory = (e) => {
        this.setState({
            todo: {
                text: this.state.todo.text,
                category: e.target.value,
            },
        });
    };

    deleteTodo = (index) => {
        let newTodoList = this.state.todoList;
        newTodoList.splice(index, 1);
        this.setState({
            todoList: newTodoList,
        });
    };

    displayCategory = (e) => {
        this.setState({
            filter: e.target.innerText,
        });
    };

    render() {
        return (
            <div className="Todo">
                <div className="inputToDo">
                <input
                    value={this.state.todo.text}
                    onChange={this.putOneTodo}
                    placeholder="Write your todo here..."
                />
                <select
                    onChange={this.putOneCategory}
                    className="categories-container"
                >
                    <option>Coding</option>
                    <option>Sports</option>
                    <option>Food</option>
                    <option>Extra</option>
                </select>
             
                <button className="addBtn"  onClick={this.addTodo}>
                    Add it
                </button>
             
                </div>
              
                   
                        {this.state.todoList.length !== 0 ? (
                            this.state.todoList
                                .filter(
                                    (todo) =>
                                        this.state.filter === 'All' ||
                                        todo.category === this.state.filter
                                )
                                .map((todo, index) => {
                                    return (
                                        <div
                                            className="todo-container"
                                            key={index}
                                        >
                                            <span>- {todo.text} | </span>
                                            <span className="category-container">
                                                {' '}
                                                {todo.category}{' '}
                                            </span>
                                            <Button variant="outlined" color="secondary"
                                                onClick={() => {
                                                    this.deleteTodo(index);
                                                }}
                                                
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    );
                                })
                        ) : (
                            <div className='todoNothing'>You did not add any todo yet</div>
                        )}
               
                    <div className="filter-container">
                        <p>Filter it</p>
                        <hr />
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            👨‍💻 Coding
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            🏋️‍♀️ Sports
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            🥗 Food
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            😱 Extra
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            All
                        </button>
                    </div>
                </div>
           
        );
    }
}
