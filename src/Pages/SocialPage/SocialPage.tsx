import { Nav, TopNav } from '../../components/containers/index'

import { FoodTypeCard } from '../../components/elements/index'
import { SocialPageStyle } from './SocialPageStyle'

const SocialPage = () =>  {

    return (
    <>
       <TopNav/>
            <SocialPageStyle>
                <FoodTypeCard/>
                <FoodTypeCard/>
                <FoodTypeCard/>
                <FoodTypeCard/>
            </SocialPageStyle>
        <Nav />
    </>
    )
    
}
export default SocialPage

