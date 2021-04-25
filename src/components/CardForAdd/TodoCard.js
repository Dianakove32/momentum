import React from 'react'
import RemoveCard from '../removeCard/RemoveCard'
import ToDo from '../toDo/toDo'

export default function TodoCard() {
    return (
        <div>
                <div order='1' id='h1'

            className="todo-container card">
            <div className="title-card">My todo list</div>
            <ToDo/>
            <RemoveCard />
          </div>
        </div>
    )
}
