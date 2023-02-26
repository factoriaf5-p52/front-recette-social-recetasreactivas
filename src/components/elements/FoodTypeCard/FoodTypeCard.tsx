import { FoodTypeCardStyle } from './FoodTypeCardStyle'
import foodPic from '../../../assets/foodPic.svg'
import { Reviews, Chip } from '../index'

const FoodTypeCard = () =>  {

    return (
    <>
    <FoodTypeCardStyle>
    <Reviews/>
        <div className='foodImgCard'>
            <img src={foodPic} alt="Spaghetti Boognese" />
        </div>
        <div className='text'>
            <h2>Fideos a la Bolognesa</h2>
            <span>
                <p>Italian</p>
                <p>Dinner</p>
                <p>+More</p>
                <Chip/>
            </span>
        </div>
    </FoodTypeCardStyle>
    </>
    )
    
}
export default FoodTypeCard

