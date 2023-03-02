import {  ExploreCardStyle } from './ExploreCardStyle'
import platePic from './../../../assets/platePic.svg'
import { Title } from '../RecipePicCard/recipePicCardStyle'

const ExploreCard = () =>  {

    return (
    <>
    <ExploreCardStyle>   
        <img src={platePic} alt="" />
        <h1>Spicy Ramen</h1>
        <p> 15 min</p>
    </ExploreCardStyle>
    </>
    )
    
}
export default ExploreCard

