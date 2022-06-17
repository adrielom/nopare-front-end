import React from 'react';
import { TitleComponent } from '../../Shared/TitleComponent';
import VideoBackgroundComponent from '../../Shared/VideoBackgroundComponent';
import './theater-video-section.scss';
import Video from '../../../assets/videos/pneu.webm';
import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';

interface TheaterVideoSectionProps {}

export default function TheaterVideoSection({}: TheaterVideoSectionProps) {
	let color = '#d39326';
	return (
		<VideoBackgroundComponent className='video-background' uri={Video}>
			<section>
				<HeaderTitleComponent style={{ position: 'absolute' }} color={color}>
					:: no pare
				</HeaderTitleComponent>
				<div className='title-component-wrapper'>
					<TitleComponent
						style={{
							color,
						}}
						className='title-component'>
						As cintas protetivas que não deixam seu carro parar de rodar.
					</TitleComponent>
				</div>
			</section>
		</VideoBackgroundComponent>
	);
}
