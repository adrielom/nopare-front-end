import './header-title-component.scss';
import React from 'react';

interface HeaderTitleComponentProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	color?: string;
}

export const HeaderTitleComponent = ({
	children,
	color,
	...rest
}: HeaderTitleComponentProps) => {
	return (
		<div className='headerTitleComponent' {...rest}>
			<p style={{ color }}>{children}</p>
		</div>
	);
};
