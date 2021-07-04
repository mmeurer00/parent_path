import React from 'react'
import NavbarItems from './NavItems'
import styled from 'styled-components'
import './Navbar.css'

const NavbarStyle = styled.div`
    background: linear-gradient(90deg, blue 0%, red 100%);
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    1.2 rem;
`
const NavbarLogo = styled.div`
    color: white;
    justify-self: start;
    margin-left: 20 px;
    cursor: pointer;
`

class Navbar extends React.Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        return(
            <NavbarStyle>
                <NavbarLogo>LOGO</NavbarLogo>
                <div className="menu-icon" onClick={this.handleClick}/>
                    <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                        {NavbarItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )})}
                    </ul>
            </NavbarStyle>
        )
    }
}

export default Navbar