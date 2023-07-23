import React from 'react';
import Button from './Button';
import { useState } from 'react';
import { HeartIcon, PlusIcon } from '@heroicons/react/24/outline';



interface SubMenuProps {
   subTxt : String;
   tools  : String[];
}


const Toolbar = () => {
    const[isActive,setIsActive] = useState(false)
    const tools: string[] = ["Github","Figma"];
  return (
    <div className="mt-3 w-3/12 h-5/6 bg-neutral-300 opacity-90 p-3 absolute top-16 left-20" >
        
      {/* Menu Box  */}
      <div className='bg-black w-full text-white p-1 flex justify-center items-center gap-5'>
        <h5>Your Tools</h5>
        <Button
           border= "none"
           color = "transparent"
           height = "auto"
           onClick = {()=>setIsActive(!isActive) }
           radius = "4px"
           width = "auto"
           children = {'+'}
           fontColor ="white"

           />
            <Button
           border= "none"
           color = "transparent"
           height = "auto"
           onClick = {()=> {
            alert('clicked')
           }}
           radius = "4px"
           width = "auto"
           children = {'share'}
           fontColor ="white"
           />
      </div>
      {isActive &&<SubMenu 
      subTxt = "Tool"
      tools = {tools}
      /> }
    
    </div>
  )
}





const SubMenu :React.FC<SubMenuProps> = ({subTxt,tools})=> {
    const[isActive,setIsActive] = useState(false)
    return(
        <>
        <div className='bg-black pl-5 w-full text-white p-1 flex justify-start items-center gap-5 mt-1'>
           <Button
           border= "none"
           color = "transparent"
           height = "auto"
           onClick = {()=> setIsActive(!isActive)}
           radius = "4px"
           width = "auto"
           children = {'+'}
           fontColor ="white"
           />
         <h6>{subTxt}</h6>
        </div>
        {isActive &&  <Tools tool = {tools}/> }
       
        
        </>
    );

}

interface toolsProps  {
    tool : string[];
}

const Tools :React.FC<toolsProps>= ({tool})=> {
    
    return(
        <>
      
           <Tool txt = {tool}/>
        
        </>
    );
      
    
}

interface toolsProps {
    txt : string[];
}


const Tool:React.FC<toolsProps>= ({txt})=> {
  return (
    <>
    {

      txt.map(element => {
        return(
        <div className='bg-blue-500 w-full text-white p-1 pl-10 flex justify-start items-center gap-5 mt-1'> 
        <Button
              border= "none"
              color = "transparent"
              height = "auto"
              onClick = {()=> alert('clicked')}
              radius = "4px"
              width = "auto"
              children = {'+'}
              fontColor ="white"
              />
              
              <p>{element}</p>
              
       </div> )
    })} 
    </>
  )
  
 
}







export default Toolbar;
