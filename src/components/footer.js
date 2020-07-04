import React from 'react'
import {
  faInstagram,
  faFacebook,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <h4> Follow us and Say Hello! </h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/kpriet_toastmasters_club/?igshid=12bf7lqaig4wn"><FontAwesomeIcon icon={faFacebook} size="2x" aria-label="FB Button"/> </a>
            <a href="https://www.instagram.com/kpriet_toastmasters_club/?igshid=12bf7lqaig4wn"><FontAwesomeIcon icon={faInstagram} size="2x" aria-label="IG Button"/></a>
            <a href="https://bit.ly/tmc-podcast"><FontAwesomeIcon icon={faSpotify} size="2x" aria-label="Spotify Button"/></a>
          </div>
        </div>

        <div className="column">
          <p>
            <strong>For info and Query, Contact</strong><br/>
            Abishek Velavan - +91 76396 45032<br/>
            Aravind T - +91 98941 62769 <br/>
            <br/>
            <strong>Mail to :</strong><br/>
            <a href="mailto:toastmastersofficial7@gmail.com">toastmastersofficial7@gmail.com</a><br/>
          </p>
        </div>
        
        <div className="column">
          <p>
            <strong>The Toastmasters Club,</strong><br/>
            KPR Institute of Engineering and Technology,<br/>
            Avinashi Road, Arasur, <br/>Coimbatore IN
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="copyright-text">
        <p>© { new Date().getFullYear() } KPRIET Toastmasters Club. All Rights Reserved </p>
      </div>

      <div className="credit-text">
        <p>
        Developed with ❤ by <a href="https://arunpandian7.github.io"> Arun Pandian R </a>
        </p>
      </div> 


    </div>
    
  </footer>
)

export default Footer
