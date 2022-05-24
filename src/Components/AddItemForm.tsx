import React, {KeyboardEvent, ChangeEvent, useState} from "react";

type PropsType={
    callback:(value:string)=>void
}

export const AddItemForm: React.FC<PropsType>=({callback})=>{
    const [inputValue,setInputValue]=useState('')

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
      callback(inputValue)
        setInputValue('')
    }
    const keyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.key === 'Enter'){
            onClickHandler()
        }
    }

    return(
        <div>
            <input onChange={onChangeHandler} onKeyPress={keyPressHandler} value={inputValue}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}
