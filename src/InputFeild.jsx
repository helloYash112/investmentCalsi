import { useState} from 'react'
export function InputFeild({udtInputData,symbol}){
    const[val,newVal]=useState(0);
    function udtInputVal(event){
        const updatedValue = event.target.value;
        
        
    newVal(updatedValue);
        udtInputData(updatedValue,symbol);
    }
   
    return(<ol id="user-input">
        <label htmlFor={symbol}>{symbol}</label>
        <li> <input type="number" value={val} onChange={udtInputVal} />
       </li>
       
    </ol>)
}