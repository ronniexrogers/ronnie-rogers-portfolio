import { Nav, NavItem, NavLink } from "reactstrap"


const Navigation = () => {
    return ( 
        <div className="nav">
            <Nav className='nav-bar' justified >
                <NavItem>
                    <NavLink className="navlink" active href="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navlink" href="/Resume">
                        Resume
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navlink" href="/Portfolio">
                        Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navlink" href="/About">
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navlink" href="/Contact">
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
     )
}
 
export default Navigation