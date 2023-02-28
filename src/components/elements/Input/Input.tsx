import React, { InputHTMLAttributes } from 'react';
import { InputStyle } from './inputStyle'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
  }
  

const Input: React.FC<InputProps> = ({ placeholder  }) => {
    return (
    <>

    <InputStyle placeholder={placeholder} />
    </>
    )
    
}
export default Input

