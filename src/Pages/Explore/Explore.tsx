import React from 'react'
import { ChipContainer, ExploreNav, ExploreStyle } from './ExploreStyle'
import { CartButton, Chip, ExploreCard, SearchBar } from '../../components/elements'
import { Nav } from '../../components/'
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
        <ChipContainer>
        <Chip label='Recomended' color='#00c27a'/>
        </ChipContainer>
        
        <p>Based on the type of food you like</p>
        <span>
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        </span>
    </ExploreStyle>
  )
}

export default Explore