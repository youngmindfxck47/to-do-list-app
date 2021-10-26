import React from 'react'
import ToDo from './ToDo'

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const renderedList = list.map(
        (item) => (
        <ToDo 
            title={item.title} 
            removeTodoItemProp={(e) => removeTodoListProp(item._id)} 
            editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
            completed={item.completed} 
            key={item.title} />
            ))
    return (
        <div className='ui grid center aligned'>
           {renderedList}
        </div>

    )
}

export default List