import { Button, LoginButton } from '../../components/elements/index'
import { HomeNav, HomeStyle } from './homeStyle'
import logoIcon from './../../assets/logoIcon.svg'



const Home = () =>  {

    return (
    <>
    <HomeNav>
            <LoginButton/>            
    </HomeNav>
    <HomeStyle>
        
        
        <div>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officiis libero facere dolore ea exercitationem!
            </p>

        </div>
        <Button type={"submit"} label={'Bon appetit'}/>
        <footer>
        <img src={logoIcon} alt="" />
        </footer>
        
        
    </HomeStyle>
        
    </>
    )
    
}
export default Home

