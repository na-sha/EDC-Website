import styled from 'styled-components'
import styles from '../style'
import {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
  
    image31,
} from '../assets/gallery'

const Row = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0 4px;
`

const Column = styled.div`
flex: 25%;
max-width: 25%;
padding: 0.5rem 1rem;
img{
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

@media screen and (max-width: 800px){
    flex: 33.33%;
    max-width: 33.33%;
}
@media screen and (max-width: 600px){
    flex: 50%;
    max-width: 50%;
}
`

const Gallery = () => {
    return (
        <section id='gallery' className={`flex flex-col ${styles.paddingY}`}>
            <h1 className={`text-center uppercase ${styles.heading2}`}><span className='text-gradient'>EDC</span> Gallery</h1>
            <Row>
                <Column><img src={image1} alt="" /><img src={image12} alt="" /><img src={image3} alt="" /><img src={image4} alt="" /><img src={image5} alt="" /><img src={image24} alt="" /></Column>
                <Column><img src={image6} alt="" /><img src={image7} alt="" /><img src={image8} alt="" /><img src={image9} alt="" /><img src={image10} alt="" /><img src={image23} alt="" /></Column> 
                <Column><img src={image11} alt="" /><img src={image2} alt="" /><img src={image31} alt="" /><img src={image14} alt="" /><img src={image15} alt="" /><img src={image22} alt="" /></Column>
                <Column><img src={image16} alt="" /><img src={image17} alt="" /><img src={image19} alt="" /><img src={image20} alt="" /><img src={image21} alt="" /><img src={image25} alt="" /></Column>
                {/* <Column><img src={image21} alt="" /><img src={image22} alt="" /><img src={image23} alt="" /><img src={image24} alt="" /><img src={image25} alt="" /></Column>  */}
            </Row>
        </section>
    )
}

export default Gallery