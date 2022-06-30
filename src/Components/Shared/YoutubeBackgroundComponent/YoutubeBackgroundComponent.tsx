import React from 'react';
import './youtube-background-component.scss';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubeBackgroundComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	src: string;
}

export default function YoutubeBackgroundComponent({
	src,
	children,
}: YoutubeBackgroundComponentProps) {
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
	};

	return (
		<div className='youtube-container'>
			<YouTube videoId={src} opts={opts} onReady={onPlayerReady} />
			{/* <iframe
				src={`https://www.youtube.com/embed/${src}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${src}`}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen></iframe> */}
			{children}
		</div>
	);
}
