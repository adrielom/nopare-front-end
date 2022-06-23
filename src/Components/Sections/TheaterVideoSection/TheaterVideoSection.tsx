import React from 'react';
import { TitleComponent } from '../../Shared/TitleComponent';
import VideoBackgroundComponent from '../../Shared/VideoBackgroundComponent';
import './theater-video-section.scss';
import Video from '../../../assets/videos/pneu.mov';
import PneuImage from '../../../assets/images/pneuBg.png';
import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';
import { OsTypes, osName } from 'react-device-detect';
import ImageBackgroundComponent from '../../Shared/ImageBackgroundComponent';

interface TheaterVideoSectionProps {}

export default function TheaterVideoSection({}: TheaterVideoSectionProps) {
	let color = '#d39326';

	const Content = () => {
		return (
			<section>
				<HeaderTitleComponent color={color}>:: no pare</HeaderTitleComponent>
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
		);
	};

	return (
		<>
			{OsTypes.IOS === osName || OsTypes.MAC_OS === osName ? (
				<ImageBackgroundComponent className='video-background' uri={PneuImage}>
					<Content />
				</ImageBackgroundComponent>
			) : (
				<VideoBackgroundComponent className='video-background' uri={Video}>
					<Content />
				</VideoBackgroundComponent>
			)}
		</>
	);
}
