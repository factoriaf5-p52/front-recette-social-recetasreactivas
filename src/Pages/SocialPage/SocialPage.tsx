import { Nav, TopNav } from '../../components/index'

import { FoodTypeCard } from '../../components/elements/index'
import { SocialPageStyle } from './SocialPageStyle'
import { Link } from 'react-router-dom'

const SocialPage = () =>  {

    return (
    <>
       <TopNav/>
            <SocialPageStyle>
                <Link to="/RecipeDetail" style={{ textDecoration: 'none' }}><FoodTypeCard/></Link>
                <Link to="/RecipeDetail" style={{ textDecoration: 'none' }}><FoodTypeCard/></Link>
                <Link to="/RecipeDetail" style={{ textDecoration: 'none' }}><FoodTypeCard/></Link>
                <Link to="/RecipeDetail" style={{ textDecoration: 'none' }}><FoodTypeCard/></Link>
            </SocialPageStyle>
        <Nav />
    </>
    )
    
}
export default SocialPage

