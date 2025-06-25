import React, { useEffect, useState } from 'react'

import './styles/Header.scss' // 스타일은 별도로
import Nav from './Nav'
import Util from './Util'
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY

            setIsScrolled(scrollTop > 0)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <header className={isScrolled? 'scroll':''}>
            <div className="inner">
                <Nav />
                <h1 className='logo'>
                    <a href="#"><img src="./img/logo.svg" alt="" /></a>
                </h1>
                <Util />
            </div>
        </header>
    )
}

export default Header