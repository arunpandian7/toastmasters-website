import React from "react"
import Link from 'gastby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

const IndexPage = props => (
  <Layout>
    <div className = "page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <Img
            fluid={props.data.imageFirst.childImageSharp.fluid}
            className='club-logo'
            alt='TMC'
            />
            <p className="tmc-header">
              KPRIET <br />
              Toastmasters Club
            </p>

            <p>
              The Toastmasters Clud of KPRIET. We are the speakers and debators of KPRIET
            </p>

            <a
            href="#Attach Google Form Link"
            clasName = 'btn-hero-green'
            >
            Join Us
            </a>
          </div>

          <div>
            <Img
            fluid={props.data.imageOne.childImageSharp.fluid}
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
            <p className="hero-header">Explore Us </p>
            <div className = "dash" />
            <p>
              TMC is a union of people who come together to uphold the Speaking Spirit.
            </p>
          </div>
        </section>
      </div>

      <div className = "container">
        <section className = "hero-section3">
          <div className="hero-texts">
            <p className = "hero-header">Show your skills</p>
            <div className="dash" />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
            <p className="hero-header">Get Connected !</p>
            <div className="dash" />
            <p>
              Meet people with similar interest to work together on projects and
              host events to build a better collaborative environment. We are
              more than 100 members with interests on various fields of
              technology here to know each other and get connected. Meet our
              members to know more about us and build something cool!
            </p>
            <Link to="/team" className="btn-hero-green">
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  </Layout>

)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File{
    childImageSharp{
      fluid (maxwidth: 1000){
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
  }
`

export default IndexPage
