import React from 'react'
import Link from 'gatsby-link'
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'
import logo from '../images/icon_circle.png'


const Header = props => (
  <div className="nav-bar">
    <Helmet
      title={GatsbyConfig.siteMetadata.title}
      meta={[
        { name: 'description', content: 'The official site of KPRIET Toastmasters Club, KPRIET.' },
        {
          name: 'keywords',
          content: 'Community, Toastmasters, Orators, KPR, KPRIET, Toastmasters International, College, Engineering, Coimbatore',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }]}
    >
      <meta name="google-site-verification" content="S25r4aVHM-vcCs3aXFCeEJ1UAbom7gYGc0PcLhjB6-4" />
    </Helmet>

    <div className="container">
      <div className="nav-items">
        {/* <Img fluid={props.data.logotmc.childImageSharp.fluid}/> */}
        <div className="logo">
          <img src={logo} className="logo-img" alt="Logo" />
        </div>
        <ul>
          <li>
            <Link to="/" exact="true" activeClassName="active" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" exact="true" activeClassName="active">
              Events
            </Link>
          </li>
          <li>
            <Link to="/team" exact="true" activeClassName="active">
              Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)



export default Header