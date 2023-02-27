import { Button, Input } from '../../components/elements/index'
import { Form, ImageCover, LogInNav, LoginStyle } from './loginStyle'
import imgPan from '../../assets/imgPan.svg'
import logoIcon from '../../assets/logoIcon.svg'
import backArrow from '../../assets/backArrow.svg'

const Login = () =>  {

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

        <Form>
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

