import React from "react";
import bimage from "./../assets/homebg.png";
import Button from "../components/Button";
const MyWorkSpace = () => {
 

  return (
    <div
      className="h-screen w-screen bg-cover justify-center flex p"
      style={{ backgroundImage: `url(${bimage})` }}
    >
      {/* navbar */}
      <div className="w-4/5 ">
        <div className="h-10 bg-neutral-300 w-full mt-3 flex justify-between pl-10 pr-10 items-center">
          {/* profile  */}
         
          <div className="flex gap-10 items-center ">
          <Button
           border= "none"
           color = "#011E2F"
           height = "90%"
           onClick = {()=> {
            alert('clicked')
           }}
           radius = "4px"
           width = "auto"
           children = "My WorkSpace"
           fontColor ="white"

           />
           <Button
           border= "none"
           color = "#ABC2F7"
           height = "90%"
           onClick = {()=>  {
            alert('clicked')
           }}
           radius = "4px"
           width = "auto"
           children = "Create Team"
           fontColor ="black"
           />

          </div>
          <div className="w-8 h-8 bg-red-600 rounded-full">
            <img src="#" alt="" />
          </div>
           
        </div>
      </div>
    </div>
  );
};



export default MyWorkSpace;
