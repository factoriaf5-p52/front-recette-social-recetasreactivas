import { type } from 'os';
import React, { InputHTMLAttributes } from 'react';
import { InputStyle } from './inputStyle'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
  }
  

const Input: React.FC<InputProps> = ({ placeholder, type  }) => {
    return (
    <>

    <InputStyle placeholder={placeholder} type={type} />
    </>
    )
    
}
export default Input

