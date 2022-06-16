import React, { ClassAttributes, ReactNode } from 'react';
import './video-background-component.scss';

interface VideoBackgroundComponentProps {
	uri: string;
	children?: ReactNode;
}

export default function VideoBackgroundComponent({
	uri,
	children,
}: VideoBackgroundComponentProps) {
	return (
		<div className='wrapper'>
			<iframe
				src={`https://www.youtube.com/embed/${uri}?autoplay=1&controls=0&disablekb=1&loop=1&modestbranding=1&iv_load_policy=3&playsinline=1&color=white&mute=1&playlist=${uri}`}
				frameBorder={0}
			/>
			{children}
		</div>
	);
}
