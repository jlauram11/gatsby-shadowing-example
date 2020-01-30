import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from 'gatsby-theme-styles/src/components/heading.styles'

const Heading = ({ children }) => (
  <Styled.Heading>{children} - Shadow me</Styled.Heading>
)

export default Heading

Heading.propTypes = {
  children: PropTypes.string,
}

Heading.defaultProps = {
  children: '',
}
