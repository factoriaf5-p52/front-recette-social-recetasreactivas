import { FormEventHandler, useContext } from 'react'
// import { AuthContext } from '../../../context/auth.context';
//import { useAuth } from '../../hooks/auth.hook';
import { Button, Input } from '../../components/elements/index'
import { Form, ImageCover, LogInNav, LoginStyle } from './loginStyle'
import imgPan from '../../assets/imgPan.svg'
import logoIcon from '../../assets/logoIcon.svg'
import backArrow from '../../assets/backArrow.svg'

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
}

const Login = (props:Props) =>  {
    // const {onSubmit} = useContext(AuthContext);
  const { handleSubmit } = props;


 // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
 //   e.preventDefault();
 //   if (onSubmit)
 //     return onSubmit();
 // }
    return (
    <>
    <LoginStyle>
        <LogInNav>
            <img src={backArrow} alt="back" />
            <h3>Login</h3>
        </LogInNav>
        <ImageCover>
            <img src={imgPan} alt="someone cooking illustration" />
        </ImageCover>

        <Form onSubmit={handleSubmit}>
            <Input  placeholder="Enter your username"/>
            <Input  placeholder="Password"/>
           <Button label="Sign In" />
        </Form>

<footer>        
    <img src={logoIcon} alt="logo" />
</footer>
    </LoginStyle>
    </>
    )
    
}
export default Login

function useAuth(): { onSubmit: any } {
    throw new Error('Function not implemented.')
}

