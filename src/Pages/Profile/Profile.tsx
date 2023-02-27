import { RecipePicCard } from '../../components/elements/index'
import { FeedContainer, Grid, ProfileStyle } from './profileStyle'

const Profile = () =>  {

    return (
    <>
    <ProfileStyle>
        <FeedContainer>
            <Grid>
                <RecipePicCard/>
                <RecipePicCard/>
                <RecipePicCard/>
                <RecipePicCard/>
                <RecipePicCard/>
                <RecipePicCard/>
            </Grid>
        </FeedContainer>
    </ProfileStyle>
    </>
    )
    
}
export default Profile

