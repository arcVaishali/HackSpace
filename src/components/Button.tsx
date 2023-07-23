import React from 'react';


interface Props {
    border : string;
    color: string;
    children?:React.ReactNode;
    height : string;
    onClick :(event : React.MouseEvent<HTMLButtonElement>)=> void;
    radius : string;
    width : string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    fontColor
  }) => { 
  return (
    <button 
    className='p-1'
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         color : fontColor,
         width
      }}
    >
    {children}
    </button>
  );
}

export default Button;

