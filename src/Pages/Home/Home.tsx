import { ButtonAcceptStyle } from '../../components/elements/Button/BottonAccept/ButtonAcceptStyle'
import { ChipClearStyle} from '../../components/elements/Chips/ChipClear/chipClearStyle'
import { ChipGreenStyle } from '../../components/elements/Chips/ChipGreen/chipGreenStyle'

import { HomeStyle } from './homeStyle'

const Home = () =>  {

    return (
    <>
    <HomeStyle>Home
    </HomeStyle>

    <ChipClearStyle>
            hola
    </ChipClearStyle>

    <ChipGreenStyle>
            hola
    </ChipGreenStyle>

    <ButtonAcceptStyle>Bon appetit</ButtonAcceptStyle>
    </>
    )
    
}
export default Home

