import React from 'react';
import TitleComponent from '../../TitleComponent';
import './theater-video-section.scss';

interface TheaterVideoSectionProps {}

export default function TheaterVideoSection({}: TheaterVideoSectionProps) {
	return (
		<section>
			<TitleComponent>title</TitleComponent>
			<iframe
				src={`https://www.youtube.com/embed/${'t0d8lhIKt2Y'}`}
				frameBorder={0}></iframe>
		</section>
	);
}
