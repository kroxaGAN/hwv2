import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsInputType={
    callback:(value:string)=>void
}

export const AddItemForm: React.FC<PropsInputType>=(props)=>{
    const [inputValue, setInputValue]=useState('')
    const [error,setError]=useState<boolean|null>(false)
    const inputChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.value)
        setError(false)
    }
    const addEnterHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            inputButtonHandler()
        }
    }
    const inputButtonHandler=()=>{
        if (inputValue.trim()!==''){
           props.callback(inputValue.trim())
        } else setError(true)
        setInputValue('')
    }
   return(
       <div>
           <input onChange={inputChangeHandler}
                  value={inputValue}
                  onKeyPress={addEnterHandler}
                  className = {error ? 'errorInput':''}
           />
           <button onClick={inputButtonHandler} >+</button>
           {error && <div className={'error'}>error</div>}
       </div>
       )
}
