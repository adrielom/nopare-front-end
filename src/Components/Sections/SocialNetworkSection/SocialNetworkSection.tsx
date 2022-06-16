import React from 'react';
import TitleComponent from '../../TitleComponent';
import './social-network-section.scss';

interface SocialNetworkSectionProps {}

export default function SocialNetworkSection({}: SocialNetworkSectionProps) {
	return (
		<section>
			<TitleComponent>hey</TitleComponent>
			<p>phone</p>
			<div>
				<a href='#'>
					<img src='#' alt='#' />
				</a>
				<a href='#'>
					<img src='#' alt='#' />
				</a>
				<a href='#'>
					<img src='#' alt='#' />
				</a>
			</div>
		</section>
	);
}
