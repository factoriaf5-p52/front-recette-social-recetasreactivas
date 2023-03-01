import { ReactNode } from 'react';
import { Type } from 'typescript';
import { ButtonStyle } from './buttonStyle'

type ButtonProps = {
    label: string;
    type: ReactNode
  }

const Button = ({ label, type}: ButtonProps) =>  {

    return (
    <>
    <ButtonStyle >
    {label}
  
    </ButtonStyle>
    </>
    )
    
}
export default Button

