import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://instagram.com/sosc.sahyadri">Instagram</a>
          <a href="https://linkedin.com/company/sosc-sahyadri">LinkedIn</a>
          <a href="https://twitter.com/sahyadri_osc">Twitter</a>
        </div>
        
        <div className="column">
          <p>
            <strong>The Toastmasters Club,</strong><br/>
            KPR Institute of Engineering and Technology,<br/>
            Avinashi Road, Arasur, Coimbatore IN<br/><br/>
            toastmastersofficial7@gmail.com<br/>
            +91 76396 45032
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
