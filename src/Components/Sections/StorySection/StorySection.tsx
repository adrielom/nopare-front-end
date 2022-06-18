import React from 'react';
import { TitleComponent } from '../../Shared/TitleComponent';
import './story-section.scss';
import Pneu from '../../../assets/images/pneu.png';
import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';

interface StorySectionProps {}

export default function StorySection({}: StorySectionProps) {
	return (
		<section>
			<HeaderTitleComponent>:: sobre nós</HeaderTitleComponent>
			<div className='fifty-fifty'>
				<div className='text-side'>
					<TitleComponent className='title-text'>
						Desde 2014, uma empresa em desenvolvimento contínuo.
					</TitleComponent>
					<p>
						A força do nordestino reside na capacidade de resistir às
						adversidades, superar obstáculos e se manter firme mesmo nas
						situações mais difíceis. Nada para ou tira do rumo quem é capaz de
						suportar a pressão, se adaptar às mudanças e perseverar em seu
						caminho.
					</p>
					<p>
						Foi com essa garra que a No Pare Borrachas se estabeleceu no Eusébio
						(região metropolitana de Fortaleza) e aliou os melhores insumos,
						tecnologia e engenharia de última geração, para se especializar num
						produto que hoje é sinônimo de qualidade e segurança em todo o
						Brasil.
					</p>
				</div>
				<div className='image-side'>
					<img src={Pneu} alt='pneu foto' />
				</div>
			</div>
		</section>
	);
}
