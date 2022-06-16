import React from 'react';
import TitleComponent from '../../TitleComponent';
import VideoBackgroundComponent from '../../VideoBackgroundComponent';
import './video-title-section.scss';

interface VideoTitleSectionProps {}

export default function VideoTitleSection({}: VideoTitleSectionProps) {
	return (
		<VideoBackgroundComponent uri={'t0d8lhIKt2Y'}>
			<TitleComponent>HEY</TitleComponent>
		</VideoBackgroundComponent>
	);
}
