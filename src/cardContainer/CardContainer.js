import React from 'react';
import './card/Card.scss';
import { Card } from './card/Card.js';


const CardContainer = props => {

	return (
		<main className="card-container container">
			<div className="row">
				{props.filteredData.map((item, index) => {
					return (
						<Card
							name={item.name}
							job={item.job}
							company={item.company_name}
							profileImage={item.profile_image}
							icon={item.icon}
							phone={item.phone}
							email={item.email}
							key={index} />
					
				)})}
			</div>
		</main>
	);

}

export  default CardContainer