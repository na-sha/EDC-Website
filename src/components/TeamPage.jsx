import arpit from "../assets/team/arpit.jpeg";
import arushi from "../assets/team/arushi.jpeg";
import divyansh from "../assets/team/divyansh.jpeg";
import hasika from "../assets/team/hasika.jpeg";
import hetal from "../assets/team/hetal.jpeg";
import jaskirat from "../assets/team/jaskirat.jpeg";
import karan from "../assets/team/karan.jpeg";
import lakshya from "../assets/team/lakshya.jpeg";
import mhuskan from "../assets/team/mhuskan.jpeg";
import pallav from "../assets/team/pallav.jpeg";
import parav from "../assets/team/parav.jpeg";
import shivam from "../assets/team/shivam.jpeg";
import mdsingh from "../assets/team/mdsingh.jpg"
import harpreets from "../assets/team/harpreets.jpg"


const TeamPage = () => {
  return (
    <div className="bg-black wrapper_team">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      ></link>
      <div className="container">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[240.8px] leading-[75px]">
          <span className="text-gradient">Mentors</span>
        </h1>
        <div className="row justify-center">
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <img src={mdsingh} />
              <div className="pro_detail">
                <h3 className="pro_name">Dr. Mandeep Singh</h3>
                <span className="pro_desc">President, EDC Tiet</span>
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +7488895623
                </span> */}
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <img src={harpreets} />
              <div className="pro_detail">
                <h3 className="pro_name">Dr. Harpreet Singh</h3>
                <span className="pro_desc">Vice President, EDC Tiet</span>
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +7488895623
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[240.8px] leading-[75px]">
          <span className="text-gradient">Executive Board</span>
        </h1>
        <div className="row justify-center">
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/arpit-taneja-3390a81a0/" target="_blank" rel="noopener noreferrer">
                <img src={arpit} />
              </a>
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Arpit Taneja</h3> */}

                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9818084700
                </span> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/arushi-garg-0509/" target="_blank" rel="noopener noreferrer">
                <img src={arushi} />
              </a>
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Arushi Garg</h3> */}
                {/* <a href="mailto:agarg5_be20@thapar.edu">
                  <span className="pro_desc">agarg5_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 6283108001
                </span> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/divyansh-kalia-607851196/" target="_blank" rel="noopener noreferrer">
                <img src={divyansh} />
              </a>
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Divyansh Kalia</h3> */}
                {/* <a href="mailto:dkalia_be20@thapar.edu">
                  <span className="pro_desc">dkalia_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 7073013567
                </span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/hetal-sharma-20a0a31ba/" target="_blank" rel="noopener noreferrer">
                <img src={hetal} />
              </a>
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Hetal Sharma</h3> */}
                {/* <a href="mailto:hsharma3_be20@thapar.edu">
                  <span className="pro_desc">hsharma3_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9999398116
                </span> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="http://">
                <img src={lakshya} />
              </a>
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Lakshya Goel</h3> */}
                {/* <a href="mailto:lgoel_be20@thapar.edu">
                  <span className="pro_desc">lgoel_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9818675905
                </span> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/mhuskan-chawla-b437491bb/" target="_blank" rel="noopener noreferrer">
                <img src={mhuskan} />
              </a>
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Mhuskan Chawla</h3> */}
                {/* <a href="mailto:mchawla_be20@thapar.edu">
                  <span className="pro_desc">mchawla_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9810871096
                </span> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="row justify-center">
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/karan-singh-thakur-34735020b/" target="_blank" rel="noopener noreferrer">
                <img src={karan} />
              </a>{" "}
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Karan Thakur</h3> */}
                {/* <span className="pro_desc">founder</span> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9805231975
                </span> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/hasika-tandon-03731b200/" target="_blank" rel="noopener noreferrer">
                <img src={hasika} />
              </a>{" "}
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Hasika Tandon</h3> */}
                {/* <a href="mailto:Htandon_be20@thapar.edu">
                  <span className="pro_desc">Htandon_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 7011348626
                </span> */}
              {/* </div> */}
            </div>
          </div>

          {/* <div className="row justify-center"> */}
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/pallav-bansal-2008611bb/" target="_blank" rel="noopener noreferrer">
                <img src={pallav} />
              </a>{" "}
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Pallav Bansal</h3> */}
                {/* <span className="pro_desc">founder</span> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9560912780
                </span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="http://">
                <img src={jaskirat} />
              </a>
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Jaskirat Singh</h3> */}
                {/* <a href="mailto:Jsingh19_be20@thapar.edu">
                  <span className="pro_desc">Jsingh19_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 7696290415
                </span> */}
              {/* </div> */}
            </div>
          </div>
          {/* </div> */}

          {/* <div className="row justify-center"> */}
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/shivam-taneja-409a961b6/">
                <img src={shivam} />
              </a>{" "}
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Shivam Taneja</h3> */}
                {/* <a href="mailto:staneja_be20@thapar.edu">
                  <span className="pro_desc">staneja_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9821090076
                </span> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="our_team">
              <a href="https://www.linkedin.com/in/paravpreetsingh/">
                <img src={parav} />
              </a>{" "}
              {/* <div className="pro_detail"> */}
                {/* <h3 className="pro_name">Paravpreet Singh</h3> */}
                {/* <a href="mailto:psingh9_be20@thapar.edu">
                  <span className="pro_desc">psingh9_be20@thapar.edu</span>
                </a> */}
                {/* <span className="pro_contact">
                  <i className="fa fa-phone-square"></i> +91 9812884824
                </span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TeamPage;
