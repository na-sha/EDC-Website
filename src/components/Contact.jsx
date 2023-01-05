import styles from '../style'
import './Contact.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <main class="grid-container">
        <div class="flow">
          <h1 class="fs-700 uppercase ff-serif">Get in touch</h1>
          <p>
            Have a question? - drop us a message. Feel free to ask us for
            guidance in entrepeneurship or a question or anything in general you
            feel should be conveyed. We are always happy to help.
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
                  <select>
                    <option selected disabled>
                      -- Please choose an option --
                    </option>
                    <option>Have a query?</option>
                    <option>Sponsor Us</option>
                    <option>Other</option>
                  </select>
                </li>
                <li>
                  <div classname="grid grid-2">
                    <input
                      type="text"
                      placeholder="First name"
                      id="fname"
                      name="First name: "
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      id="lname"
                      name="Last name: "
                      required
                    />
                  </div>
                </li>
                <li>
                  <div classname="grid grid-2">
                    <input
                      type="text"
                      placeholder="Email"
                      // class="contact-form-txt"
                      id="email"
                      name="Email: "
                      required
                    />
                    {/* <input type="text" placeholder="Phone" /> */}
                  </div>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    // class="contact-form-textarea"
                    id="msg"
                    name="Message: "
                    required
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
                  value="https://edctiet.netlify.app/"
                ></input>
                <li>
                  <div class="grid grid-3">
                    <div class="required-msg">REQUIRED FIELDS</div>

                    <button
                      class="btn-grid"
                      type="button"
                      name="add"
                      id="add"
                      value="ADD"
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
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact