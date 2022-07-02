import React, { useState } from 'react';
import './youtube-background-component.scss';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubeBackgroundComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	src: string;
	image?: string;
}

export default function YoutubeBackgroundComponent({
	src,
	image,
	children,
}: YoutubeBackgroundComponentProps) {
	const [hasLoaded, setHasLoaded] = useState(false);

	const opts: YouTubeProps['opts'] = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
			mute: 1,
			loop: 1,
			rel: 0,
			playsinlie: 1,
			modestbranding: 1,
			controls: 0,
			playlist: src,
		},
	};

	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		// access to player in all event handlers via event.target
		event.target.playVideo();
		setTimeout(() => setHasLoaded(true), 2000);
	};

	return (
		<div className='youtube-container'>
			<YouTube videoId={src} opts={opts} onReady={onPlayerReady} />
			{children}
			{image && !hasLoaded && (
				<div
					style={{
						backgroundImage: `url(${image})`,
					}}
					className={`background-image-loading`}></div>
			)}
		</div>
	);
}
