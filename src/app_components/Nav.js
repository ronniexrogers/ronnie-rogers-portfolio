import { NavItem, NavLink } from "reactstrap"

const Nav = () => {
    return ( 
        <div className="nav">
            <Nav justified tabs>
                <NavItem>
                    <NavLink active href="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/About">
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Contact">
                        Contact
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Portfolio">
                        Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Resume">
                        Resume
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
     )
}
 
export default Nav