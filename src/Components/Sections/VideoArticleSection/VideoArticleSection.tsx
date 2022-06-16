import React, { ReactNode } from 'react';
import './video-article-section.scss';

interface VideoArticleSectionProps {
	url: string;
	children: ReactNode;
}

export default function VideoArticleSection({
	children,
}: VideoArticleSectionProps) {
	return (
		<section>
			<div>{children}</div>
			<div>
				<iframe
					src={`https://www.youtube.com/embed/${'t0d8lhIKt2Y'}`}
					frameBorder={0}></iframe>
			</div>
		</section>
	);
}
