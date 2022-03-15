import React from 'react'

const NavItem = ({name, link}) => {
    return (
          <a href={link}>{name}</a>
    )
}

export default NavItem
