import styles from '../style'
import './Deliverables.css'
import Proposal from './Proposal';
// import Proposal from './Proposal';
// import Footer from './Footer'
// import Navbar from './Navbar'


const Deliverables = () => {
  
const handleClick = () => {
  alert("Form Submitted !");
};
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      </div>
      <main class="grid-container">
          
          <div>
                <Proposal />
            </div>
        <div class="flow">
          <h1 class="fs-700 uppercase ff-serif">Deliverables by EDC</h1>
          <p>
          {/* EDC-TIET is one of the most prominent Entrepreneurship Cells in North India. <br />  */}
{/* We have an offline coverage of about 12k students and a good reach online through our socials. <br /> We also have dedicated teams for the engaging audience both online and offline with more than 50 connected E-Cells across the country, more than 5k followers on Facebook, and a reach of more than 20k through the Instagram handles of our team.  */}
{/* Our vision is to foster an entrepreneurial spirit among the youth who wish to create an impact. We aim to provide India's untapped potential with a platform to rise beyond limits. */}
       {/* <br />     Have a question? - drop us a message. We are always happy to help. */}
          </p>
          {/* <p>
            You can also contact us on our socials or <br />
            <b className="text-gradient">Email: edc@thapar.edu</b> <br />
            <b className="text-gradient">Arpit Taneja: +91 9818084700</b> <br />
            <b className="text-gradient">Arushi Garg: +91 6283108001</b>
        </p> */}
          {/* <div className="absolute z-[0] w-[10%] h-[35%] top-0 pink__gradient" /> */}
          {/* <div className="absolute z-[1] w-[20%] h-[80%] rounded-full bottom-40 white__gradient" /> */}
          {/* <div className="absolute z-[0] w-[30%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        </div>
      </main>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        
      </div>
    </>
  );
}

export default Deliverables