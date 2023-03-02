import { CartButton, RecipePicCard } from '../../components/elements/index'
import { FeedContainer, Grid, ProfileStyle, TopNav } from './profileStyle'
import Tab, { TabItem } from './Tab/Tab'
import  userImg  from '../../../src/assets/userImg.svg'
import Nav from '../../components/Nav/Nav'

const Profile = () =>  {
const onTabSelected = (index: any) => {
        console.log(index);
      };
    return (
    <>
    <ProfileStyle>
        <TopNav>
        <img src={userImg} alt="User profile avatar" />
        <CartButton/>
        </TopNav>
        <FeedContainer>
        <Tab onTabSelected={onTabSelected}>
            <TabItem>Recipes</TabItem>
            <TabItem>Menus</TabItem>
            <TabItem>Groups</TabItem>
        </Tab>            
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
    <Nav/>
    </>
    )
    
}
export default Profile

