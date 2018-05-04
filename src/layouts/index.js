import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Nalta Tech' },
        { name: 'keywords', content: 'nalta, tech' },
      ]}
    />
    {children()}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
