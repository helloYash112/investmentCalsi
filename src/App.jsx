import Header from "./util/Header";
import { useState } from "react"
import { InputFeild } from "./InputFeild";
import Result from "./Result";
const clientInput={
  initialInvestment:1000,
  annualInvestment:1500,
  expectedReturn:5.5,
  duration:1

}
function App() {
  
  const[val,udtVal]=useState(clientInput);


  function udtInputVal(values,sym){
    udtVal(oldData=>{
        return{
            ...oldData,
            [sym]:+values
        }
    })
        }

  return(<div className="centre">
   <Header></Header>
   
   <>
   <InputFeild sendData={udtInputVal} inputData={val}/>
    <Result userData={val} />
   </>
   </div>
  );
}

export default App
