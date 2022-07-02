import React, { ReactNode } from 'react';
import './image-background-component.scss';

interface ImageBackgroundComponentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	uri: string;
	children?: ReactNode;
}

export default function ImageBackgroundComponent({
	uri,
	children,
	...rest
}: ImageBackgroundComponentProps) {
	return (
		<div {...rest}>
			<img className='image-background-component-wrapper' src={uri} />
			{children}
		</div>
	);
}
