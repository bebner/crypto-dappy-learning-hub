import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";
import styled from "styled-components";
import "../css/layout.css"
import "../css/typography.css"
import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
           }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header />
        <Bottom>
          <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
          <Content>
            {children}
          </Content>
        </Bottom>
      </Wrapper>
    )}
  />
)

export default Layout

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  
`
const Content = styled.div`
  margin-left: 2rem;
  max-height: calc(100vh - 10rem);
  overflow-y: auto;
  padding: 0 5rem;
  background: rgba(0,0,0,.2);
  flex: 1;

  @media (max-width: 700px) {
    max-height: calc(100vh - 15rem);
    margin-left: 0;
    background: none;
    padding: 0;
  }
`

const Bottom = styled.div`
  display: flex;
  
  @media (max-width: 700px) {
    flex-direction: column;
  }
`