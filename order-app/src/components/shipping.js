import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './css/shipping.css';

class Shipping extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
    return(
      <ButtonDropdown className='button' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>
					Shipping
				</DropdownToggle>
				<DropdownMenu>
					{
						this.props.shipping.map((ship, k) =>{
							return <DropdownItem key={k}>{ship.shipOptionName} ${ship.shipCost}</DropdownItem>
						})
					}
				</DropdownMenu>
			</ButtonDropdown>
    );
  }
}

export default Shipping;
