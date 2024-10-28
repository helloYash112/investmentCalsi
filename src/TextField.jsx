import { useState } from "react"
const list=[['i','a'],['e','y']];
export function TextField(){
    const[inputData,changeData]=useState(0);
    
    function udtValue(event){
        changeData(event.target.value);
    }
    return <div id="user-input" >
        {
         list.map((arr,row)=>{

            return(<li key={row}>
                <ol>
            {
                arr.map((item,col)=><li key={`${row}${col}`}>
                    
                     <input type="number" value={inputData} onChange={udtValue} />
                </li>)
            }
            </ol>
            </li>)
         })
        }
         
    </div>

}