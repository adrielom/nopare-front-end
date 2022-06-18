import React from 'react';
import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';
import { TitleComponent } from '../../Shared/TitleComponent';
import './contact-me-section.scss';
import Input from 'react-phone-number-input/input';

interface ContactMeSectionProps {}

export default function ContactMeSection({}: ContactMeSectionProps) {
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
							type='text'
						/>
						<input
							placeholder='Email'
							className='rounded-button black-outline'
							type='email'
							name=''
							id=''
						/>
						<Input
							placeholder='Telefone'
							className='rounded-button black-outline'
							onChange={() => {}}
							useNationalFormatForDefaultCountryValue
							defaultCountry='BR'
						/>
						<input
							className='rounded-button black-outline black-button'
							type='button'
							value='Quero ser revendedor'
						/>
					</form>
				</div>
			</main>
		</section>
	);
}
