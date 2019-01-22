import React from 'react';
import Button from '../../common/button/button';

import './style.scss';

const heroMain = ({onItemSelect, flowActive}) => {
	return <div className={!flowActive ? 'main-hero' : 'main-hero flow-started'}>
			<div className="main-hero__inner container">
				<div className="main-hero__texts">
					<h1 className="main-hero__texts__heading">
						Find dit fly
					</h1>
					<p className="main-hero__texts__desc">
						Få et overblik over alle ankomster / afgange fra
						Københavns Lufthavn.
					</p>
				</div>
				<div className="main-hero__cta">
					<Button extraClass="btn btn--secondary" text="Find fly" fetchType="arrivals" onItemSelect={onItemSelect} />
				</div>
			</div>
		</div>;
};

export default heroMain;
