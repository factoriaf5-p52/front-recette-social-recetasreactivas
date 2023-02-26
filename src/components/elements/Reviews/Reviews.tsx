import StarIcon from '../../icons/Stars'
import { ReviewsStyle, StarsContainer } from './reviewsStyle'


const Reviews = () =>  {

    return (
    <>
    <ReviewsStyle>     
    <StarsContainer>
        <StarIcon fill='var(--color-highlights)' />
        <StarIcon fill='var(--color-highlights)' />
        <StarIcon fill='var(--color-highlights)' />
        <StarIcon fill='var(--color-highlights)' />
        <StarIcon fill='var(--color-white-secondary)' />
    </StarsContainer>
   



    <p>+850 reviews</p>    
    </ReviewsStyle>


    </>
    )
    
}
export default Reviews

