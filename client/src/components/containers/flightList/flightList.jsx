import React from 'react';
import Flight from '../flight/flight';
import Button from '../../common/button/button'
import SearchBox from '../../common/searchBox/searchBox';

import './style.scss';

const FlightList = ({ flights, searchQuery, handleSearch, flightType, onItemSelect, flowActive}) => {
	
  return <React.Fragment>
			<div className={flowActive ? "flight-list" : "flight-list is-hidden"}>
				<div className="flight-list__controls">
					<div className="flight-list__controls__search">
						<SearchBox value={searchQuery} onChange={handleSearch} />
					</div>
					<div className="flight-list__controls__buttons">
				  		<Button extraClass={flightType === 'arrivals' ? 'btn btn--secondary active' : 'btn btn--secondary'} text="Ankomster" fetchType="arrivals" onItemSelect={onItemSelect} />
						<Button extraClass={flightType === 'departures' ? 'btn btn--secondary active' : 'btn btn--secondary'} text="Afgange" fetchType="departures" onItemSelect={onItemSelect} />
					</div>
				</div>

				<div className="flight-list__item flight-list-header">
					<div className="flight-list__item__cell destination">
						Destination
					</div>
					<div className="flight-list__item__cell time">Tid</div>
					<div className="flight-list__item__cell expected">
						Forventet
					</div>
					<div className="flight-list__item__cell expected">
						Flyselskab
					</div>
					<div className="flight-list__item__cell flight-no">
						Fly nr.
					</div>
				</div>
				{flights.map(flight => (
					<Flight
						key={flight.id}
						time={flight.time}
						operator={flight.operator}
						expected={flight.expected}
						flightNo={flight.flightNo}
						destination={flight.destination}
						gate={flight.gate}
						terminal={flight.terminal}
						linkText={flight.linkText}
					/>
				))}
			</div>
		</React.Fragment>;
};

export default FlightList;
