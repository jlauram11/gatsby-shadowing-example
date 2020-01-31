import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from 'gatsby-theme-styles/src/components/link.styles'

const Link = ({ children, ...props }) => (
  <Styled.Link {...props}>{children}</Styled.Link>
)
export default Link

Link.propTypes = {
  children: PropTypes.string,
}

Link.defaultProps = {
  children: '',
}
