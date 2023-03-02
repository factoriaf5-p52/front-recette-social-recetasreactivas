import { RecipeDetailStyle, Title, Top, First, Time, Text, Field, Recipe, Ingridients, CardContainer } from './RecipeDetailStyle';
// import foodPic from '../../assets/foodPic.svg'
import loveGray from '../../assets/loveGray.svg';
// import { Reviews } from '../../elements/Reviews'
import backArrow from '../../assets/backArrow.svg';
import { Chip, FoodTypeCard, Reviews } from '../../components/elements';
import { Link } from 'react-router-dom';
//import foodPic from '../../assets/foodPic.svg'

const RecipeDetail = ()=> {

    return (
        <>
            <RecipeDetailStyle>
           
            <button><img src={loveGray} alt="Add to Fav" /></button>
            <CardContainer>
            <First>
            <Link to="/SocialPage"><img src={backArrow} alt="Go back" /></Link>
                    <h2>
                        Spaghetti Bolognese
                    </h2>
                </First>
                <Reviews/>
                {/* <div className='Rating'> */}
                    {/* Rating goes here */}
                {/* </div> */}
                <Time>
                    <Title>Time</Title>
                    <p>40 min</p>
                </Time>
                <Ingridients>
                    <Title>Ingredients</Title>
                        <Chip color='var(--color-white-primary)' label="Pasta +" />
                        <Chip color='var(--color-white-primary)' label="Tomato +" />
                        <Chip color='var(--color-white-primary)' label="Meat +" />
                        <Chip color='var(--color-white-primary)' label="Grarlic +" />
                </Ingridients>
                <Recipe>
                    <Title>Instructions</Title>
                        <Field>
                            <Text>
                                Heat 1 tablespoon of the olive oil in a large, heavy saucepan until shimmering. 
                                Add the onion, carrot, celery, and pancetta and cook over moderate heat, stirring occasionally, until the vegetables are softened but not browned, about 8 minutes. 
                                Scrape the vegetable mixture into a large bowl.
                            </Text>
                        </Field>  
                </Recipe>
            </CardContainer>
              
            </RecipeDetailStyle>
            {/* <FoodTypeCard /> */}
        </>
    );

}
export default RecipeDetail

