import styles from '../style'
import './Contact.css'
// import Footer from './Footer'
// import Navbar from './Navbar'


const SponsorUs = () => {
  
const handleClick = () => {
  alert("Form Submitted !");
};
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      </div>
      <main class="grid-container">
        <div class="flow">
          <h1 class="fs-700 uppercase ff-serif">Sponsor Us</h1>
          <p>
          EDC-TIET is one of the most prominent Entrepreneurship Cells in North India. <br /> 
We have an offline coverage of about 12k students and a good reach online through our socials. <br /> We also have dedicated teams for the engaging audience both online and offline with more than 50 connected E-Cells across the country, more than 5k followers on Facebook, and a reach of more than 20k through the Instagram handles of our team. 
{/* Our vision is to foster an entrepreneurial spirit among the youth who wish to create an impact. We aim to provide India's untapped potential with a platform to rise beyond limits. */}
       <br />     Have a question? - drop us a message. We are always happy to help.
          </p>
          <p>
            You can also contact us on our socials or <br />
            <b className="text-gradient">Email: edc@thapar.edu</b> <br />
            <b className="text-gradient">Arpit Taneja: +91 9818084700</b> <br />
            <b className="text-gradient">Arushi Garg: +91 6283108001</b>
          </p>
          <div className="absolute z-[0] w-[10%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[20%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[30%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
        <div>
          <form
            target="_blank"
            class="my-form"
            action="https://formsubmit.co/abhinavgarg7731@gmail.com"
            method="POST"
          >
            <div class="grid-container--form ">
              <ul>
               
                <li>
                  <div classname="grid grid-2">
                    <input
                      type="text"
                      placeholder="Company Name"
                      id="cname"
                      name="Company name: "
                      required
                    />
                    <input
                      type="text"
                      placeholder="POC name"
                      id="pocname"
                      name="POC name: "
                      required
                    />
                  </div>
                </li>
                <li>
                  <div classname="grid grid-2">
                    <input
                      type="text"
                      placeholder="POC Email Id"
                      // class="contact-form-txt"
                      id="email"
                      name="Email: "
                      required
                    />
                    <input type="text" placeholder="POC number" />
                  </div>
                </li>
                <li>
                  <textarea
                    placeholder="Deliverables you want"
                    // class="contact-form-textarea"
                    id="msg"
                    name="Message: "
                  ></textarea>
                </li>

                {/* <li>
                                    <input type="checkbox" id="terms" />
                                    <label for="terms">I have read and agreed with <a href="">the terms and
                                        conditions.</a></label>
                                </li> */}
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="hidden"
                  name="_next"
                  value="https://edcthapar.netlify.app/"
                ></input>
                <li>
                  <div class="grid grid-3">
                    <div class="required-msg">REQUIRED FIELDS</div>

                    <button
                      class="btn-grid"
                      onClick={handleClick}
                      type="submit"
                    >
                      <span class="back">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                          alt=""
                        />
                      </span>
                      <span class="front">SUBMIT</span>
                    </button>
                    <button class="btn-grid" type="reset">
                      <span class="back">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                          alt=""
                        />
                      </span>
                      <span class="front">RESET</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </main>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        
      </div>
    </>
  );
}

export default SponsorUs