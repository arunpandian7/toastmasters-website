import React from 'react'
import Link from 'gatsby-link'
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'


const Header = props => (
  <div className="nav-bar">
    <Helmet
      title={GatsbyConfig.siteMetadata.title}
      meta={[
        { name: 'description', content: 'KPRIET Toastmasters Club' },
        {
          name: 'keywords',
          content: 'Community, Toastmasters, Orators, KPR, college',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }]}
    />

    <div className="container">
      <div className="nav-items">
        {/* <Img fluid={props.data.logotmc.childImageSharp.fluid}/> */}
        <ul>
          <li>
            <Link to="/" exact="true" activeClassName="active">
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



export const logoImage = graphql`
  fragment logoImage on File{
    childImageSharp{
      fluid (maxWidth: 800){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }`

export const logoQuery = graphql`
    query {
      logotmc: file(relativePath: { eq: "images/logo_grad.png"}){
        childImageSharp{
          fluid (maxWidth: 800){
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }`

export default Header