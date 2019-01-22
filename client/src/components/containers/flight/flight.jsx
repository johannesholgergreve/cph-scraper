import React from 'react';

import './style.scss';

const Flight = ({id, time, expected, operator, flightNo, destination, gate}) => {
	return <div className="flight-list__item" key={id}>
		<div className="flight-list__item__cell destination">{destination}</div>
		<div className="flight-list__item__cell time">{time}</div>
		<div className="flight-list__item__cell expected">{expected}</div>
		<div className="flight-list__item__cell operator">{operator}</div>
		<div className="flight-list__item__cell flight-no">{flightNo}</div>
	</div>;
};

export default Flight;
