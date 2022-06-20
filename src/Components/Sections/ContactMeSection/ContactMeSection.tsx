import React, { useState } from 'react';
import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';
import { TitleComponent } from '../../Shared/TitleComponent';
import './contact-me-section.scss';
import Input from 'react-phone-number-input/input';
import Validator from 'email-validator';
const URI = 'https://nopare-backend.herokuapp.com';
// const URI = 'http://localhost:5000';
interface ContactMeSectionProps {}

export default function ContactMeSection({}: ContactMeSectionProps) {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [loading, setLoading] = useState(false);

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
		</section>
	);
}
