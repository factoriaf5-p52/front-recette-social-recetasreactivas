import React from 'react'
import { ExploreNav, ExploreStyle } from './ExploreStyle'
import { CartButton, Chip, RecipePicCard, SearchBar } from '../../components/elements'
import { Nav } from '../../components/containers'
import UserImg from '../../assets/userImg.svg'

type Props = {}

const Explore = (props: Props) => {
  return (
    <ExploreStyle>
        <ExploreNav>
        <img src={UserImg}/>
        <CartButton/>
        </ExploreNav>
        <Nav/>
        <SearchBar/>
        <Chip label='Recomended' color='#00c27a'/>
        <p>Based on the type of food you like</p>
        <span>
        <RecipePicCard/>
        <RecipePicCard/>
        <RecipePicCard/>
        <RecipePicCard/>
        </span>
    </ExploreStyle>
  )
}

export default Explore