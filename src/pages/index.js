import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/indexLayout.js'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

const IndexPage = props => (
  <Layout>
    <div className = "page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <p className="tmc-header">
              KPRIET <br />
              Toastmasters Club
            </p>

            <p className="tmc-desc">
              The Toastmasters Club is a community built by people who strives to achieve eloquency in Public Speaking, enhancing communication 
              skills and mastering stage skills.
            </p>

            <a
            href="#AttachGoogleFormLink"
            className = 'btn-hero-green'
            >
            Become a Member
            </a>
          </div>

          <div>
            <Img
            fluid={props.data.imageFirst.childImageSharp.fluid}
            className='hero-image'
            alt='hero image'
            />
          </div>

        </section>
      </div>

      <div className="container">
        <section className="hero-section2">
          <Img
          fluid = {props.data.imageTwo.childImageSharp.fluid}
          className="hero-image"
          alt="hero image"
          />

          <div className="hero-texts">
            <p className="hero-header">Who are we? </p>
            <div className = "dash" />
            <p>
            People are often confused by the name "Toastmasters", thinking it's about giving toasts at events. It's funny how some people think this organization has something to do with making bread toast. But it's not what we are. <br /><br />
            The KPRIET Toastmasters Club is an organization that enables a student to improve communication skill and terminate stage fear in a safe, encouraging, supportive environment for the students to speak up as icebreaker.
            </p>
          </div>
        </section>
      </div>

      <div className = "container">
        <section className = "hero-section3">
          <div className="hero-texts">
            <p className = "hero-header">What do we do?</p>
            <div className="dash" />
            <p>
            The KPRIET Toastmasters Club is an exclusive club where we unite, take up responsibilities and organise events for our own development.
            We endeavour to escalate our talents and help others to explore their inner self by creating a stimulating environment. 
            </p>
          </div>
          <Img
          fluid={props.data.imageThree.childImageSharp.fluid}
          className = "hero-image"
          alt="hero image"
          />
        </section>
      </div>
      <div className="container">
        <section className="hero-section4">
          <div>
            <Img
              fluid={props.data.imageFour.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
          <div className="hero-texts">
            <p className="hero-header">Join our Team</p>
            <div className="dash" />
            <p>
            Lorem Ipsum fdjkflasfjsakld
            
            </p>
            <Link to="/team" className="btn-hero-green">
              Learn More
            </Link>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="hero-section5">
        <div className="hero-texts">
          <p className="hero-header"> Our Basic Activities</p>
          <div className="dash" />
          <p>
            We conduct regular meetings
            <ul>
            <li>contests</li>
            <li>events</li>
            <li>Webinars</li>
            <li>Anchoring & Content writing skills</li>
            <li>Online certification courses</li>
            </ul>
          </p>
        </div>
        <div>
            <Img
              fluid={props.data.imageFive.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>

)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File{
    childImageSharp{
      fluid (maxWidth: 800){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }



`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_grad.png" }) {
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/hero_main.png" }) {
      ...firstSiteImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...firstSiteImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...firstSiteImages
    }
    imageFour: file(relativePath: { eq: "images/hero_connect_.png" }) {
      ...firstSiteImages
    }
    imageFive: file(relativePath: { eq: "images/activity.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
