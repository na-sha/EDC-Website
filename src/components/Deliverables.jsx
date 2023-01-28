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
      <main className="grid-container flow">
        <div>
          <h1 className={"ff-serif fs-700 uppercase"}><span className='text-gradient'>Deliverables</span> by EDC</h1>
          <h2>

          <ul>
            <li>ACRYLIC ON THE BACKDROP WHEN ARTIST PERFORMS</li>
            <li>GIVEAWAY OFFICIAL PRODUCTS</li>
            <li>EXCLUSIVE SPONSOR VIDEO</li>
            <li>SHOUTOUTS BY ARTIST</li>
            <li>EVENT COVERAGE BY DRONE CAMERA</li>
          </ul>
          </h2>

        </div>
        <div>
          <Proposal />
        </div>
      </main>
    </>
  );
}

export default Deliverables