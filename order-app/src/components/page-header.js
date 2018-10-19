import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './page-header.css';
import GOT from '../assets/GOT_header.jpg';

const PageHeader = (prop) => {

	return (
		<div>
			<Jumbotron fluid className='jumbotron'>
				<Container fluid>
					<img src={GOT} alt='Game of Throne painting' />
				</Container>
			</Jumbotron>
		</div>
	)

}
	
export default PageHeader;