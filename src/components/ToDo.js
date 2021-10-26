import React, { useState } from "react";

const ToDo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title)
    const [completedState, setCompletedState] = useState(completed)

    const handleDivDoubleClick = () => {
        setIsEditing(true)
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if(key === 13) {
            editTodoItemProp({ title: tempValue })
            setValue(tempValue)
            setIsEditing(false)
        } else if(key === 27) {
            setTempValue(value)
            setIsEditing(false)
        }

    }

    const handleInputChange = (e) => {
        setTempValue(e.target.value);
    }

    const handleButtonClick = () => {
        setCompletedState((oldCompletedState) => {
            const newState = !oldCompletedState
            editTodoItemProp({ completed: newState })
            return newState
        })

    }


    return (
        <div className='row' >
            { isEditing ? 
       
            <div className='column seven wide'>
                <div className='ui input fluid'> 
                    <input 
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        autoFocus={true}
                        value={tempValue} />
                </div>
            </div>               
         :
        <>
        <div className='column five wide'  onDoubleClick={handleDivDoubleClick}> 
            <h2 className={'ui header' + (completedState ? ' green' : '')}>{value}</h2>
        </div>
        <div className='column one wide'>
            <button className={'ui button circular icon' + (completedState ? ' blue' : ' green')}
                    onClick={handleButtonClick}>
                <i className='white check icon'></i>
            </button>
        </div>
        <div className='column one wide'>
        <button className='ui button circular icon red'
                onClick={removeTodoItemProp}>
                <i className='white remove icon'></i>
            </button>
        </div>
        </>
    }
    </div>
    )
}

export default ToDo