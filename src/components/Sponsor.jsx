import styled from 'styled-components'
import styles from '../style'
import './Contact.css'
import {

image65,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
img9,
img10,
img11,
img12,
img13,
img14,
img15,
  
  } from '../assets/gallery'
import SponsorUs from './SponsorUs'
// import Proposal from './Proposal'
import Deliverables from './Deliverables'
  
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

const Sponsor = () => {
    return (
      <section id="gallery" className={`flex flex-col ${styles.paddingY}`}>
<Row>
{/* <div className={`${styles.paddingX} ${styles.flexCenter}`}> */}
        {/* <div className={`${styles.boxWidth}`}> */}
  <h1 className={`text-center uppercase ${styles.heading2}`}>
          <span className="text-gradient">Sponsorship</span> Proposal
        </h1>
        <Deliverables />
          {/* <Proposal /> */}
        {/* </div> */}
      {/* </div> */}
</Row>
<Row>

<div className={`${styles.paddingX} ${styles.flexCenter}`}>
<div className={`${styles.boxWidth}`}>
  <SponsorUs />
</div>
</div>
</Row>
        <h1 className={`text-center uppercase ${styles.heading2}`}>
          <span className="text-gradient">Previous</span> Sponsors
        </h1>
        <Row>
          <Column>

            <img src={image65} alt="" />

            <img src={img5} alt="" />
            <img src={img9} alt="" />
            <img src={img12} alt="" />
          </Column>
          <Column>
            <img src={img4} alt="" />
          <img src={img6} alt="" />  
          </Column>
          <Column>
            <img src={img3} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img11} alt="" />
          </Column>
          <Column>
            <img src={img13} alt="" />
          <img src={img2} alt="" />
          </Column>
          <Column>
          </Column>
          {/* <Column><img src={image21} alt="" /><img src={image22} alt="" /><img src={image23} alt="" /><img src={image24} alt="" /><img src={image25} alt="" /></Column>  */}
        </Row>
      </section>
    );
}

export default Sponsor