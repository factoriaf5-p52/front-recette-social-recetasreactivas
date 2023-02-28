import { RecipeDetailStyle } from './RecipeDetailStyle'
import foodPic from '../../assets/foodPic.svg'
import loveGray from '../../assets/loveGray.svg'
// import { Reviews } from '../../elements/Reviews'
import backArrow from '../../assets/backArrow.svg'

const RecipeDetail = () =>  {

    return (
    <>
    <RecipeDetailStyle>
        
        <img src={foodPic} alt="Spagetti Bolognese" />
        <button><img src={loveGray} alt="Add to Fav" /></button>
        <div>
            <img src= {backArrow}alt="Go back" />
            <h2>
                Spaghetti Bolognese 
            </h2>
        </div>
            <div className='Rating'>
                    {/* Rating goes here */}
            </div>
        <section>
            <h3 className=''>Time</h3>
                <p>40 min</p>
        </section>
        <section>
            <h3 className=''>Ingredients</h3>
                <p></p>
        </section>
        <section>
            <h3 className=''>Instructions</h3>
                <p></p>
        </section>
    </RecipeDetailStyle>
    </>
    )
    
}
export default RecipeDetail

