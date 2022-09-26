import { Overlay } from 'pigeon-maps';
import { HTMLAttributes } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { RiFileCopy2Fill } from 'react-icons/ri';
import './index.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
	address: string;
	contact: string;
	state: string;
	title: string;
	callback: Function;
}

export default function OverlayMap({
	address,
	contact,
	state,
	title,
	callback,
}: Props) {
	function copyToClipboard() {
		let text = `${title}\t\n\nEndereço: ${address}\n Estado: ${state}\n Telefone: ${contact}\n`;
		navigator.clipboard.writeText(text).then(
			function () {
				console.log('Async: Copying to clipboard was successful!');
			},
			function (err) {
				console.error('Async: Could not copy text: ', err);
			}
		);
		callback();
	}

	return (
		<div className='map-card-bg'>
			<div>
				<p className='map-card-title'>{title.toUpperCase()}</p>
				<IoMdCloseCircle
					className='icon'
					onClick={() => callback()}
					title='clique para fechar'
				/>
			</div>
			<p className='map-card-state'>
				<span>Estado: </span> {state.toUpperCase()}
			</p>
			<p className='map-card-address'>
				<span>Endereço: </span> {address.toUpperCase()}
			</p>
			<p className='map-card-contact'>
				<span>Telefone: </span>
				{contact.toUpperCase()}
			</p>
			<div>
				<RiFileCopy2Fill
					className='icon'
					onClick={copyToClipboard}
					title='clique para copiar'
				/>
			</div>
		</div>
	);
}
