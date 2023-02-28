import {  RecipePicCardStyle } from './recipePicCardStyle'
import foodPic from './../../../assets/foodPic.svg'
import { Title } from '../RecipePicCard/recipePicCardStyle'

const RecipePicCard = () =>  {

    return (
    <>
    <RecipePicCardStyle>   
       <div className="gradient">
        <img src={foodPic} alt="" />
        </div>
        <Title>Fideos a la bolognesa</Title>
    </RecipePicCardStyle>
    </>
    )
    
}
export default RecipePicCard

