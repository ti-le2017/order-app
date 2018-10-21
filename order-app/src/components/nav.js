import React,{ Component } from 'react';
import './css/nav.css';
import './css/fonts.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/" className='cust-font'>T LE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/ti-le2017/order-app" className='cust-font'>GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/tich-tuong-t-le-a454a263/" className='cust-font'>Linkedin</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='cust-font'>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className='cust-font'>
                    Email: Ti.le1602@gmail.com
                  </DropdownItem>
                  <DropdownItem className='cust-font'>
                    Cell: (206) 422-1770
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavMenu;
