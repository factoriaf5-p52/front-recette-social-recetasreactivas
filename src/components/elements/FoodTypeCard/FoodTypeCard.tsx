import { Cover, FoodTypeCardStyle, Profile, Tags, Title, Top } from './FoodTypeCardStyle'
import foodPic from '../../../assets/foodPic.svg'
import { Reviews, Chip } from '../index'
import  userImg  from '../../../assets/userImg.svg'

const FoodTypeCard = () =>  {

    return (
    <>
    <FoodTypeCardStyle>
        <Top>
        <Reviews/>
        <Profile>
            <p>@pepitococina</p>
            <img src={userImg} alt="user photo" />
        </Profile>
        </Top>
        <Cover>
            <img src={foodPic} alt="Spaghetti Boognese" />
        </Cover>

        <Title>Bolognesa pasta</Title>
        <Tags>
            <Chip color='var(--color-white-primary)' label="Italian"/>
            <Chip color='var(--color-white-primary)' label="Dinner"/>
            <Chip color='var(--color-white-primary)' label="+More"/>
        </Tags>
    </FoodTypeCardStyle>
    </>
    )
    
}
export default FoodTypeCard

