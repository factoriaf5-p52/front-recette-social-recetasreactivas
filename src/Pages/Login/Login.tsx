import { Button, Input } from '../../components/elements/index'
import { Form, LoginStyle } from './loginStyle'

const Login = () =>  {

    return (
    <>
    <LoginStyle>
        

        <Form>
            <Input  placeholder="Enter your username"/>
            <Input  placeholder="Password"/>
           <Button label="Sign In" />
        </Form>
    </LoginStyle>

    </>
    )
    
}
export default Login

