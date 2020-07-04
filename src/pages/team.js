import React from 'react'
import { graphql } from 'gatsby'
import GatsbyConfig from '../../gatsby-config'
import CustomHelmet from '../components/CustomHelmet'
import Layout from '../components/indexLayout'
import MemberCard from '../components/member_card'
import Img from 'gatsby-image'

function getMembers(data) {
  let members = []

  let memberList = data.allMarkdownRemark.edges

  memberList.map(element => {
      return members.push(
        <MemberCard
          username={element.node.frontmatter.username}
          full_name={element.node.frontmatter.name}
          designation={element.node.frontmatter.designation}
        />
      )
  })

  return members
}

const TeamsPage = ({ data }) => (
  <Layout>
    <CustomHelmet page={GatsbyConfig.siteMetadata.team} />
    <div className="page">
      <div className="container">
        <h2>Faculty Co-ordinators</h2>
        <div className="dash"/>
        <div className="team-section">
          {/* Card for coordinators */}
          <div className="member-card white-bg elevate">
            <Img
              fluid={data.imageCoord1.childImageSharp.fluid}
              className="profile-pic"
            />

            <div className="member-details">
              <h3 className="name">Dr. Charle Jerome</h3>
              <p className="designation">Faculty Coordinator</p>
            </div>
          </div>

          <div className="member-card white-bg elevate">
            <Img
              fluid={data.imageCoord2.childImageSharp.fluid}
              className="profile-pic"
            />

            <div className="member-details">
              <h3 className="name">Mrs. Aarthi</h3>
              <p className="designation">Faculty Coordinator</p>
            </div>
          </div>
        </div>
        <h2>Designated Core Members</h2>
        <div className="dash"/>
        <div className="team-section">{getMembers(data)}</div>
      </div>
    </div>
  </Layout>
)

export default TeamsPage

export const teamQuery = graphql`
  query membersQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___pos], order: ASC }
      filter: { fileAbsolutePath: { regex: "/members/.*md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            username
            name
            designation
          }
        }
      }
    }
    imageCoord1: file(relativePath: { eq: "images/charlie-sir.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageCoord2: file(relativePath: { eq: "images/aarthi-mam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
