import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from 'gatsby-theme-styles/src/components/paragraph.styles'

const P = ({ children }) => <Styled.Paragraph>{children}</Styled.Paragraph>
export default P

P.propTypes = {
  children: PropTypes.string,
}

P.defaultProps = {
  children: '',
}
