import { useState } from "react"
const list=[[null,null],[null,null]];
export function TextField(){
    const[inputData,changeData]=useState(0);
    
    function udtValue(event){
        changeData(event.target.value);
    }
    return <li id="user-input" className="input-group">
         <input type="number" value={inputData} onChange={udtValue}/> 
    </li>

}