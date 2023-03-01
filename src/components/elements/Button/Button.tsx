import { ButtonStyle } from './buttonStyle'

type ButtonProps = {
    label: string;
  }

const Button = ({ label}: ButtonProps) =>  {

    return (
    <>
    <ButtonStyle>
    {label}
    </ButtonStyle>
    </>
    )
    
}
export default Button

