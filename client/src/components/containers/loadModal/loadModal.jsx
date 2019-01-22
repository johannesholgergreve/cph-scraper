import React from 'react';
import Loader from './assets/flight-loader.inline.svg';

import './style.scss';

const loadModal = ({isBusy}) => {
	return <div className={!isBusy ? 'load-modal' : 'load-modal is-shown'}>
			<div className="load-modal__spinner">
				<Loader />
				<h3 className="load-modal__spinner__sub-header">Henter flyvninger</h3>
			</div>
		</div>;
};

export default loadModal;
