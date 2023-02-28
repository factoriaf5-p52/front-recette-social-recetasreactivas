import { Button, Input } from '../../components/elements/index'
import { Form, ImageCover, UploadNav, UploadFormStyle } from './UploadFormStyle'
import imgList from '../../assets/imgList.svg'
import logoIcon from '../../assets/logoIcon.svg'
import backArrow from '../../assets/backArrow.svg'


const UploadForm = () =>  {

    return (
    <>
    <UploadFormStyle>
    <UploadNav>
            <img src={backArrow} alt="back" />
            <h3>Form</h3>
        </UploadNav>
        <ImageCover>
            <img src={imgList} alt="someone cooking illustration" />
        </ImageCover>

        <Form>
            <Input  placeholder="Recipe name"/>
            <Input  placeholder="Instructions"/>
            <Input  placeholder="Ingredients"/>
            <Input  placeholder="Add Image"/>
           <Button label="Send" />
        </Form>

<footer>        
    <img src={logoIcon} alt="logo" />
</footer>
    </UploadFormStyle>
    </>
    )
    
}
export default UploadForm

