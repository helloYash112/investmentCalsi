import Header from "./util/Header";
import { useState } from "react"
import { InputFeild } from "./InputFeild";
import {calculateInvestmentResults} from './util/investment';
import { formatter } from "./util/investment";

function App() {
  const clientInput={
    'initialInvestment':0,
    'annualInvestment':0,
    'expectedReturn':0,
    'duration':0
  
  }
  
  
  
 const[clientData,udtClientData]=useState(clientInput);
 const[res,sendRes]=useState(null);
function reciveData(data,symbol){
  udtClientData(oldData=>{
    return{
      ...oldData,
      [symbol]:data
    }
  })
}
function calsy(datas){
sendRes(calculateInvestmentResults(datas));
}
  return(<div className="centre">
   <Header></Header>
   
   <ol className="input-group">
  
   <InputFeild udtInputData={reciveData} symbol='initialInvestment' ></InputFeild>
   <InputFeild udtInputData={reciveData} symbol='annualInvestment'></InputFeild>
   <InputFeild udtInputData={reciveData} symbol='expectedReturn'></InputFeild>
   <InputFeild udtInputData={reciveData} symbol='duration'></InputFeild>
   
   <button onClick={()=>calsy(clientData)}>calculate</button>
   </ol>
   {
  res && <ul>
    {
      res.map((data,row)=>{
        return<li key={row}>
          {data['year']}  {formatter.format(data['interest'])} {formatter.format(data['valueEndOfYear'])}  {formatter.format(data['annualInvestment'])}
        </li>
      })
    }
  </ul>
   }
  </div> 
  );
}

export default App
