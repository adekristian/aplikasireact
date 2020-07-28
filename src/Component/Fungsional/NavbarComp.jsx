import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../CartContext';
const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {value, setValue} = useContext(CartContext)
    return (
        <div>
    
            <Navbar color="light" light expand="md">
             

                <NavbarBrand to="/">PROJECT UAS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Product</NavLink>
                        </NavItem>
                       
                        
                        <NavItem>
                            <NavLink to="/useeffects" className="nav-link">Catalog</NavLink>
                        </NavItem>
                       
                        <NavItem>
                            <NavLink to="/reducer" className="nav-link">Transaction</NavLink>
                        </NavItem>

                    </Nav>
                    <NavItem>
                <NavLink to="/"className="nav-link">Logout</NavLink>
              </NavItem>

                    <NavbarText>
                        <Button color="danger">
                            <i className=" fa fa-shopping-cart"></i>
                            <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                    
                </Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarComp