import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../assets/notFound.png'
import { Button } from '../../components/elements/index'
import { NotFoundStyle, TextContainer } from './NotFoundStyle'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <NotFoundStyle>
      <img src= {notFound} alt="" />
    <TextContainer>
    <h1>Nothing to cook here...</h1>
    <p>You better go back and see another stuff :( </p>
    <Link to={'/'}>
    <Button label={'Go back!'} type={undefined}/>
    </Link>
    </TextContainer>
    </NotFoundStyle>
  )
}

export default NotFound 