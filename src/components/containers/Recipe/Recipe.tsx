import { RecipeStyle } from './recipeStyle'
import foodPic from '../../../assets/foodPic.svg'
import loveGray from '../../../assets/loveGray.svg'
// import { Reviews } from '../../elements/Reviews'
import backArrow from '../../../assets/backArrow.svg'
const Recipe = () =>  {

    return (
    <>
    <RecipeStyle>
        <button>
            <img src={loveGray} alt="Add to Fav" /></button>
        <img src={foodPic} alt="Spagetti Bolognese" />
        <div>
            <img src= {backArrow}alt="Go back" />
            <h2>
                Spaghetti Bolognese
            </h2>
        </div>
    </RecipeStyle>
    </>
    )
    
}
export default Recipe

