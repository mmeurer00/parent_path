import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
const Navbar = () => {
        return (
            <div>
                <NavLink
                    to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                    exact
          /* add styling to Navlink */
                    style={link}
          /* add prop for activeStyle */
                    activeStyle={{
                    background: 'darkblue'
                    }}
                >Home</NavLink>
                
                <NavLink
                    to="/login"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Login</NavLink>

                <NavLink
                    to="/resource"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Resources</NavLink>

                <NavLink
                    to="/community"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Community</NavLink>

                <NavLink
                    to="/favorites"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Favorites</NavLink>
             </div>
        )
    }

export default Navbar; 
