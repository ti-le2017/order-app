import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class PromoMenu extends Component {
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

	render() {
		return (
			<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>
					Promotions
				</DropdownToggle>
				<DropdownMenu>
					{
						this.props.promotion.map((promo, k) =>{
							return <DropdownItem key={k}>{promo.promoAmt} {promo.promotionName}</DropdownItem>
						})
					}
				</DropdownMenu>
			</ButtonDropdown>
		);
	}
}

export default PromoMenu;
