import React, {ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    callback:(title:string)=>void
}

export const EditableSpan: React.FC<PropsType> = ({title,callback}) => {
    const [edit, setEdit] = useState(false)
    const [input,setInput]=useState(title)
    const onDoubleClickHandler = () => {
        setEdit(true)
    }
    const onBlurHandler = () => {
        setEdit(false)
        callback(input)
    }
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setInput(e.currentTarget.value)
    }

    return (
        edit
            ? <input autoFocus onBlur={onBlurHandler} value={input} onChange={onChangeHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{title}</span>
    )
}
