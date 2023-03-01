import { RecipeDetailStyle, Top, First, Time, Text, Field } from './RecipeDetailStyle';
// import foodPic from '../../assets/foodPic.svg'
import loveGray from '../../assets/loveGray.svg';
// import { Reviews } from '../../elements/Reviews'
import backArrow from '../../assets/backArrow.svg';
import { Chip, Reviews } from '../../components/elements';
//import foodPic from '../../assets/foodPic.svg'

function RecipeDetail(): JSX.Element {

    return (
        <>
            <Top>
                    {/* <img src={ foodPic } alt="background" /> */}
                    <button><img src={loveGray} alt="Add to Fav" /></button>
            </Top>
            <RecipeDetailStyle>
                <First>
                    <img src={backArrow} alt="Go back" />
                    <h2>
                        Spaghetti Bolognese
                    </h2>
                </First>
                <Reviews/>
                <div className='Rating'>
                    {/* Rating goes here */}
                </div>
                <Time>
                    <h3 className=''>Time</h3>
                    <p>40 min</p>
                </Time>
                <section>
                    <h3 className=''>Ingredients</h3>
                        <Chip color='var(--color-white-primary)' label="Pasta +" />
                        <Chip color='var(--color-white-primary)' label="Tomato +" />
                        <Chip color='var(--color-white-primary)' label="Meat +" />
                        <Chip color='var(--color-white-primary)' label="Grarlic +" />
                </section>
                <Text>
                    <h3 className=''>Instructions</h3>
                    <Field>
                        Heat 1 tablespoon of the olive oil in a large, heavy saucepan until shimmering. 
                        Add the onion, carrot, celery, and pancetta and cook over moderate heat, stirring occasionally, until the vegetables are softened but not browned, about 8 minutes. 
                        Scrape the vegetable mixture into a large bowl.
                    </Field>
                </Text>
            </RecipeDetailStyle>
            {/* <FoodTypeCard /> */}
        </>
    );

}
export default RecipeDetail

