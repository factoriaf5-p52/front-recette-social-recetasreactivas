import { BottomNavStyle } from './bottomNavStyle'
import  recipesGray  from '../../../assets/recipesGray.svg'

const BottomNav = () =>  {

    return (
    <>
    <BottomNavStyle>
        <img src={recipesGray} alt="recipes" />
        <img src="" alt="home" />
        <img src="" alt="social" />
        <img src="" alt="profile" />
    </BottomNavStyle>
    </>
    )
    
}
export default BottomNav

