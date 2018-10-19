import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class PromoMenu extends Component {
	constructor(props){
		super(props);

		console.log(this.props);

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

	render() {
		return (
			<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>
					Promotions
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Header</DropdownItem>
					<DropdownItem disabled>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Another Action</DropdownItem>
				</DropdownMenu>
			</ButtonDropdown>
		);
	}
}

export default PromoMenu;