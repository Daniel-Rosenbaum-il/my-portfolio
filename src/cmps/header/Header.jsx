import React, { useState } from 'react'
import { HamburgerIcon } from './HamburgerIcon'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header id="home" className="">
            <div className="main-header container" >
                <p className="logo">Daniel Rosenbaum</p>
                <HeaderNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <HamburgerIcon setIsMenuOpen={setIsMenuOpen} />
            </div >
        </header>
    )
}
