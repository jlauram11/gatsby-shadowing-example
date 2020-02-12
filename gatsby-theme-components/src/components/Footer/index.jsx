import PropTypes from 'prop-types'
import React from 'react'

import P from '../Paragraph'

const Footer = ({ navItems }) => (
  <footer
    style={{
      background: `rebeccapurple`,
      bottom: `0px`,
      left: `0px`,
      width: `100%`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <P>
        {navItems.map(({ url, text }) => (
          <a
            style={{
              marginRight: `20px`,
              color: `#fff`,
            }}
            href={url}
          >
            {text}
          </a>
        ))}
      </P>
    </div>
  </footer>
)

Footer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navItems: PropTypes.array.isRequired,
}

export default Footer
