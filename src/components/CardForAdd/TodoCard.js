import React, {useState} from 'react'
import RemoveCard from '../removeCard/RemoveCard'
import SizeOfCard from '../SizeOfCard/SizeOfCard'
import ToDo from '../toDo/toDo'

export default function TodoCard() {
    const [state,setState]= useState(true)

    const changeWidth=()=>{
       setState(!state)
     }

    return (
        <div>
                <div order='1' id='h1'

            className="todo-container card">
            <div className="title-card"><span>My todo list</span> </div>
            <ToDo/>

          </div>
        </div>
    )
}
