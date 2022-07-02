import React from 'react';
import './video-article-section.scss';

interface VideoArticleSectionProps extends React.HTMLAttributes<HTMLElement> {
	videoUri: string;
}

export default function VideoArticleSection({
	children,
	videoUri,
}: VideoArticleSectionProps) {
	return (
		<section className={`video-article-section`}>
			<div className='text-container'>{children}</div>
			<div className='video-sect'>
				<div className='video-container'>
					<iframe
						className='video-responsive-iframe'
						src={videoUri}
						title='YouTube video player'
						frameBorder='0'
						allowFullScreen
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
				</div>
			</div>
		</section>
	);
}
