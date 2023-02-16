import { FoodTypeCardStyle } from './FoodTypeCardStyle'
import starGray from '../../../assets/starGray.svg'
import starGreen from '../../../assets/starGreen.svg'
import userGreen from '../../../assets/userGreen.svg'
import foodPic from '../../../assets/foodPic.svg'

const FoodTypeCard = () =>  {

    return (
    <>
    <FoodTypeCardStyle>
            <div className='rating'>
                <img src={starGreen} alt="Rating" />
                <img src={starGreen} alt="Rating" />
                <img src={starGreen} alt="Rating" />
                <img src={starGreen} alt="Rating" />
                <img src={starGray} alt="Rating" />
            </div>
            <div className='User'>
            <img src={userGreen} alt="User" />
            <p>@Pepito</p>
            </div>
        <div className='foodImgCard'>
            <img src={foodPic} alt="Spaghetti Boognese" />
        </div>
        <div className='text'>
            <h2>Fideos a la Bolognesa</h2>
            <span>
                <p>Italian</p>
                <p>Dinner</p>
                <p>+More</p>
            </span>
        </div>
    </FoodTypeCardStyle>
    </>
    )
    
}
export default FoodTypeCard

