import React from 'react'
import {InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
TopLine,
Heading,
Subtitle,
ImgWrapper,
Img} from './InfoSection.elements';
import { Button, Container } from '../../globalStyles';
import {Link} from 'react-router-dom';


const InfoSection = ({
    lightBg,imgStart,lightTopLine,lightTextDesc,lightText,headLine,buttonLabel,primary,topLine,description,img,start,alt}) => {
    return (
        <>
         <InfoSec lightBg={lightBg}>
             <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine ={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText ={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to="/sign-up">
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img.default} alt={alt}/>
                    </ImgWrapper>
                </InfoColumn>
                
            </InfoRow>
             </Container>
             </InfoSec>   
        </>
    )
}

export default InfoSection
