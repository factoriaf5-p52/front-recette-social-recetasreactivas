import { TopNav } from '../../components/containers/index'
import BottomNav from '../../components/containers/BottomNav/BottomNav'
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
        <BottomNav />
    </>
    )
    
}
export default SocialPage

