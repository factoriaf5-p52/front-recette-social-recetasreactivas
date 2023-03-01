import { Button, LoginButton } from '../../components/elements/index'
import { LandingNav, LandingStyle } from './LandingStyle'
import logoIcon from './../../assets/logoIcon.svg'
import { Link } from 'react-router-dom'



const Landing = () =>  {

    return (
    <>
    <LandingNav>
           <LoginButton/>                   
    </LandingNav>
    <LandingStyle>
        
        
        <div>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officiis libero facere dolore ea exercitationem!
            </p>

        </div>
        <Link to="/SocialPage"><Button label={'Bon appetit'} type={undefined}/></Link>
        <footer>
        <img src={logoIcon} alt="" />
        </footer>
        
        
    </LandingStyle>
        
    </>
    )
    
}
export default Landing

