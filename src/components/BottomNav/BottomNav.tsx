import { BottomNavStyle } from './bottomNavStyle'
import  homeGray  from '../../assets/homeGray.svg'
import  recipesGray  from '../../assets/recipesGray.svg'
import  socialGray  from '../../assets/socialGray.svg'
import  userGray  from '../../assets/userGray.svg'


const BottomNav = () =>  {

    return ( 
    <BottomNavStyle>
        <div className='navContainer'>
            <div className='nav-icon'>            
                <img src={recipesGray} alt="recipes" />
                <p>recipes</p>
            </div>
            <div className='nav-icon'>    
                <img src={homeGray} alt="home" />
                <p>home</p>
            </div>        
            <div className='nav-icon'>    
                <img src={socialGray} alt="social" />
                <p>social</p>
            </div>       
             
            <div className='nav-icon'>    
                <img src={userGray} alt="profile" />
                <p>profile</p>
            </div>
        </div>
    </BottomNavStyle>
    )
    
}
export default BottomNav

