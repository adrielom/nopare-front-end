import React from 'react';
import TitleComponent from '../../TitleComponent';
import './story-section.scss';

interface StorySectionProps {}

export default function StorySection({}: StorySectionProps) {
	return (
		<section>
			<div>
				<TitleComponent>texto</TitleComponent>
			</div>
			<div>
				<img src='#' alt='pneu foto' />
			</div>
		</section>
	);
}
