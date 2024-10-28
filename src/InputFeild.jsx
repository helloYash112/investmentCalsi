
export function InputFeild({sendData,inputData}){
  
   return(<section id='user-input'>
    <div className='input-group'>
       <label >initialInvestment</label>
       <input type="number" value={inputData.initialInvestment} onChange={(event)=>{sendData(event.target.value,'initialInvestment')}}/>
       <label ><label >initialInvestment</label></label>
       <input type="number" value={inputData.annualInvestment} onChange={(event)=>{sendData(event.target.value,'annualInvestment')}}/>
    </div>
    <div className='input-group'>
       <label >expectedReturn</label>
       <input type="number" value={inputData.expectedReturn} onChange={(event)=>{sendData(event.target.value,'expectedReturn')}}/>
       <label ><label >duration</label></label>
       <input type="number" value={inputData.duration} onChange={(event)=>{sendData(event.target.value,'duration')}}/>
    </div>
   </section>)
}