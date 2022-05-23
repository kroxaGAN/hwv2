import React, {KeyboardEvent, ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    callback:(newTitle: string)=>void
}

export const EditableSpan = ({title,callback}: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue]=useState(title)
    const onDoubleClickHandler=()=>{
        setEditMode(!editMode)
        callback(inputValue)
    }
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.value)
    }
    const onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.key==='Enter'){
            onDoubleClickHandler()
        }
    }

    return (
        editMode
            ? <input
                value={inputValue}
                autoFocus
                onChange={onChangeHandler}
                onBlur={onDoubleClickHandler}
                onKeyPress={onKeyPressHandler}
            />
            : <span onDoubleClick={onDoubleClickHandler}>{title}</span>
    )
}
