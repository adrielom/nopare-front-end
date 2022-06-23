import React, { ReactNode } from 'react';
import './video-background-component.scss';
interface VideoBackgroundComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	uri: string;
	children?: ReactNode;
}

export default function VideoBackgroundComponent({
	uri,
	children,
	...rest
}: VideoBackgroundComponentProps) {
	return (
		<div className='video-background-component-wrapper' {...rest}>
			<video
				playsInline
				preload='auto'
				autoPlay
				loop
				muted
				id='background-video'>
				<source src={uri} type='video/mp4' />
				<source src={uri} type='video/ogg' />
				<source src={uri} type='video/webm' />
				<source src={uri} type='video/mov' />
				Your browser does not support the video tag.
			</video>
			{children}
		</div>
	);
}
