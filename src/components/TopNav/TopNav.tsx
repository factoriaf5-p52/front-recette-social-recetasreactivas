import { TopNavStyle } from './TopNavStyle'
import cookieLogo from './../../assets/cookieLogo.svg'
import { LoginButton } from '../../components/elements/index'

const TopNav = () =>  {

    return (
    <>
    <TopNavStyle>
    <img src={cookieLogo} alt="Logo" />
    <LoginButton/>

    </TopNavStyle>
    </>
    )
    
}
export default TopNav

