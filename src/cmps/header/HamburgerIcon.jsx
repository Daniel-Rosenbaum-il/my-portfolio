import React from 'react'

export const HamburgerIcon = ({ setIsMenuOpen }) => {

    return (
        <div className="hamburger-icon"
            onClick={() => setIsMenuOpen(true)}  >
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}
