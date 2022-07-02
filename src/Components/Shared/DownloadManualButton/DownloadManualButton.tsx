import React from 'react';
import { VscFilePdf } from 'react-icons/vsc';
import './download-manual-button.scss';

interface DownloadManualButtonProps {}

export default function DownloadManualButton({}: DownloadManualButtonProps) {
	return (
		<a href='/manual.pdf' download='manual.pdf'>
			<div className='rounded-button'>
				<VscFilePdf size={25} style={{ marginRight: 10 }} />
				baixe o manual
			</div>
		</a>
	);
}
