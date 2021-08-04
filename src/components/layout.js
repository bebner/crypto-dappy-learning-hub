import React from "react"
import { StaticQuery, graphql, navigate } from "gatsby";
import Navbar from "./navbar";
import styled from "styled-components";
import "../css/layout.css"
import "../css/typography.css"
import Header from "./header"
import { config } from "../config/config";
import CookieConsent from "react-cookie-consent";

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
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
        >
          This site uses cookies to enhance the user experience.
        </CookieConsent>
        <Header />
        <Bottom>
          <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
          <Content>
            {children}
          </Content>
        </Bottom>
        <Footer>
          <FooterContent>Made with ❤️ and ☕ by the <a href="https://forum.onflow.org/c/community-projects/cryptodappy/35">Flow community</a></FooterContent>
          <AffiliateLogo
            onClick={() => navigate('https://onflow.org/')}
            src={`${config.ASSETS_URL}/images/PoweredByFlow_Horizontal.png`} />
        </Footer>
      </Wrapper>
    )}
  />
)

export default Layout

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Content = styled.div`
  margin-left: 2rem;
  max-height: calc(100vh - 10.5rem);
  overflow-y: auto;
  padding: 0 5rem;
  background: rgba(0,0,0,.2);
  flex: 1;

  @media (max-width: 700px) {
    max-height: none;
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

const Footer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  background: #DA4453; 
  background: -webkit-linear-gradient(to right, #89216B, #DA4453); 
  background: linear-gradient(to right, #89216B, #DA4453);

  @media (max-width: 700px) {
    position: relative;
    flex-direction: column;
    margin-top: 2rem;
  }
`

const FooterContent = styled.p`
  justify-self: start;
  padding-left: 1rem;
`

const AffiliateLogo = styled.img`
  max-width: 12rem;
  cursor: pointer;
`
