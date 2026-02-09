import { useState } from "react";
import CandleScene from "./components/candleScene";
function Birthday(){

 const [stage,setStage] = useState("candle");

 return(

 <>
   {stage === "candle" && (
      <CandleScene/>
   )}

   {stage === "wish" && (
      <WishText setStage={setStage}/>
   )}

   {stage === "cut" && (
      <CakeCutScene/>
   )}
 </>

 );
}
export default Birthday