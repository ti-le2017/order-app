import React from 'react';
import { Jumbotron } from 'reactstrap';
import './css/page_header.css';
import GOT from '../assets/GOT_header.jpg';

const PageHeader = (prop) => {

	return (
		<div>
			<Jumbotron fluid className='jumbotron'>
				<img src={GOT} alt='Game of Throne painting' />
			</Jumbotron>
		</div>
	)

}

export default PageHeader;
