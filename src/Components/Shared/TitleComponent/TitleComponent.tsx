import React, { ReactNode } from 'react';
import './title-component.scss';

interface TitleComponentProps extends React.HTMLAttributes<HTMLHeadElement> {
	color?: string;
}

export const TitleComponent = ({
	color,
	children,
	...rest
}: TitleComponentProps) => {
	return (
		<h1
			style={{
				color: color || 'black',
			}}
			{...rest}>
			{children}
		</h1>
	);
};
