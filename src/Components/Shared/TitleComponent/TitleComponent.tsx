import React, { ReactNode } from 'react';
import './title-component.scss';

interface TitleComponentProps {
	color?: string;
	children: ReactNode;
}

export default function TitleComponent({
	color,
	children,
}: TitleComponentProps) {
	return <h1 style={{ color: color || 'black' }}> {children}</h1>;
}
