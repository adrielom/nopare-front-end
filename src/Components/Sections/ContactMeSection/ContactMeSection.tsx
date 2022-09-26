import React, { useEffect, useState } from 'react';
import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';
import { TitleComponent } from '../../Shared/TitleComponent';
import './contact-me-section.scss';
import Input from 'react-phone-number-input/input';
import Validator from 'email-validator';
const URI = 'https://nopare-backend.herokuapp.com';

import { Map, Marker, Overlay } from 'pigeon-maps';
import OverlayMap from '../../Shared/OverlayMap';
import { revendedores } from '../../../../revendedores';

interface ContactMeSectionProps {}

export default function ContactMeSection({}: ContactMeSectionProps) {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [loading, setLoading] = useState(false);
	const [places, setPlaces] = useState(revendedores);

	const onSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		if (
			nome.length == 0 ||
			email.length == 0 ||
			phone.length == 0 ||
			!Validator.validate(email)
		) {
			alert('Campos Inválidos ou inexistentes!');
			setLoading(false);
			return;
		}
		console.log('rer');
		await fetch(URI, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify({
				sender: nome,
				senderEmail: email,
				senderPhone: phone,
			}),
		}).catch((error) => {
			resetFields();
			throw error;
		});
		alert('Obrigado por entrar em contato!)');
		resetFields();
	};

	const resetFields = () => {
		setNome('');
		setEmail('');
		setPhone('');
		setLoading(false);
	};

	const resetMapMarkers = () => {
		let newPlaces = [...places];
		newPlaces.forEach((place) => {
			place.isChecked = false;
		});
		setPlaces(newPlaces);
	};

	const toggleMap = (place: any) => {
		console.log(place);
		let index = places.findIndex((el) => el.id === place.id) + 1;
		let newPlaces = [...places];
		newPlaces.forEach((place) => {
			if (place.id === index) {
				place.isChecked = true;
			} else {
				place.isChecked = false;
			}
		});

		setPlaces(newPlaces);
	};

	const renderToggleMap = () => {
		return places.map((rev: any) =>
			!rev.isChecked ? (
				<Marker
					key={rev.position.join()}
					width={50}
					color={'#d39326'}
					anchor={rev.position}
					onClick={() => toggleMap(rev)}
				/>
			) : (
				<Overlay
					key={rev.position.join()}
					offset={[125, 176]}
					anchor={rev.position}>
					<OverlayMap
						callback={resetMapMarkers}
						address={rev?.address}
						title={rev?.title}
						state={rev?.state}
						contact={rev?.phone}
					/>
				</Overlay>
			)
		);
	};

	return (
		<section className='contact-me-section'>
			<HeaderTitleComponent style={{ color: 'black' }}>
				:: revendedor
			</HeaderTitleComponent>
			<main>
				<div className='text-title'>
					<TitleComponent>
						Confira onde encontrar as cintas No Pare.
					</TitleComponent>
					<p>Nada como um produto que não para no estoque.</p>
				</div>
				<div>
					<form method='get'>
						<input
							placeholder='Nome'
							className='rounded-button black-outline'
							value={nome}
							type='text'
							onChange={(e) => {
								setNome(e.target.value);
							}}
						/>
						<input
							placeholder='Email'
							className='rounded-button black-outline'
							value={email}
							type='email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Input
							placeholder='Telefone'
							className='rounded-button black-outline'
							value={phone}
							onChange={(e) => {
								if (e) {
									setPhone(e);
								}
							}}
							useNationalFormatForDefaultCountryValue
							defaultCountry='BR'
						/>
						<input
							onClick={onSubmit}
							className='rounded-button black-outline black-button'
							type='button'
							disabled={loading}
							value={loading ? 'Enviando...' : 'Quero ser revendedor'}
						/>
					</form>
				</div>
			</main>
			<div className='map'>
				<Map
					height={500}
					defaultCenter={[-14.2400732, -53.1805017]}
					defaultZoom={4}>
					{renderToggleMap()}
				</Map>
			</div>
		</section>
	);
}
