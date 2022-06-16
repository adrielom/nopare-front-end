import React from 'react';
import TitleComponent from '../../Shared/TitleComponent';
import VideoBackgroundComponent from '../../Shared/VideoBackgroundComponent';
import './video-title-section.scss';

interface VideoTitleSectionProps {}

export default function VideoTitleSection({}: VideoTitleSectionProps) {
	return (
		<VideoBackgroundComponent uri={'t0d8lhIKt2Y'}>
			<TitleComponent>HEY</TitleComponent>
		</VideoBackgroundComponent>
	);
}
