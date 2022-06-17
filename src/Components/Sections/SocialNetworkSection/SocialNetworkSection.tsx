import React from 'react';
import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';
import { TitleComponent } from '../../Shared/TitleComponent';
import './social-network-section.scss';
import {
	AiOutlineYoutube,
	AiOutlineInstagram,
	RiFacebookCircleLine,
} from 'react-icons/all';

interface SocialNetworkSectionProps {}

export default function SocialNetworkSection({}: SocialNetworkSectionProps) {
	return (
		<section className='social-network-section'>
			<HeaderTitleComponent>:: contato</HeaderTitleComponent>
			<main>
				<TitleComponent>
					Quer saber mais ou entrar em contato com a No Pare?
				</TitleComponent>
				<TitleComponent>Fale conosco.</TitleComponent>
				<div className='info'>
					<p>Ligue: (85) 3065.5586</p>
					<div>
						<a href='#'>
							<AiOutlineYoutube />
						</a>
						<a href='#'>
							<AiOutlineInstagram />
						</a>
						<a href='#'>
							<RiFacebookCircleLine />
						</a>
					</div>
				</div>
			</main>
		</section>
	);
}
