import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/so-sc">GitHub</a>
          <a href="https://instagram.com/sosc.sahyadri">Instagram</a>
          <a href="https://linkedin.com/company/sosc-sahyadri">LinkedIn</a>
          <a href="https://twitter.com/sahyadri_osc">Twitter</a>
        </div>
        <div className="column">
          <a href="https://github.com/so-sc/code-of-conduct">Community Guidelines</a>
          <a href="https://github.com/so-sc/code-of-conduct">Code of Conduct</a>
        </div>
        <div c lassName="column">
          <p>
            <strong>KPRIET Toastmasters Club</strong><br/>
            KPR Institute of Engineering and Technology,<br/>
            Arasur, Coimbatore IN<br/><br/>
            toastmastersofficial7@gmail.com<br/>
            +91 76396 45032
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>KPRIET TMC © { new Date().getFullYear() }</p>
    </div>
  </footer>
)

export default Footer
