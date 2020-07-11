import React from "react"
import Star from "../icons/star"
import Fork from "../icons/fork"
import { useStaticQuery } from "gatsby"
import '../../styles-css/card.css'

const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 25
              orderBy: { field: STARGAZERS, direction: DESC }
              privacy: PUBLIC
              ownerAffiliations: [OWNER]
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <div style={{
      maxWidth: '62.5rem',
      margin: 'auto',
      marginTop: '32px',
      padding: '2.5rem'
    }} id='projects'>
      <h3>Projects</h3>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridGap: "15px",
          padding: "15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {edges.map(({ node }) => {
          return (
            <a href={node.url} target="_blank">
              <div className='card'>
                <div>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </div>
                <div>
                  <Star />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork />
                  <span>{node.forkCount}</span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
