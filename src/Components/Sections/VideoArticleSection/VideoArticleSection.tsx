import React, { ReactNode } from 'react';
import './video-article-section.scss';

export default function VideoArticleSection({}: React.HTMLAttributes<HTMLSelectElement>) {
	return (
		<section className='video-article-section'>
			<div className='text-container'>
				<p>
					A escalada da violência nos centros urbanos fez da tranquilidade de
					contar com uma eficiente proteção balística pelas ruas da cidade um
					quesito essencial para a qualidade de vida. Mas o carro blindado,
					embora muito mais seguro, não é um tanque de guerra: a integridade de
					seus ocupantes requer movimento, pois disparos sequenciais
					concentrados são capazes de ultrapassar as barreiras de proteção. É aí
					que entram as cintas No Pare.
				</p>
				<p>
					Alvos estáticos são bem mais fáceis de acertar – por isso a prática
					comum de atirar nos pneus. Além disso, rasgos causados por obstáculos
					durante manobras de fuga ou furos de pregos e armadilhas também podem
					impedir a rápida evasão em uma situação de risco. As cintas especiais
					de proteção No Pare permitem que até com os pneus vazios um grande
					trajeto seja percorrido em velocidade, por qualquer terreno, sem
					comprometimento da estabilidade do veículo.
				</p>
			</div>
			<div className='iframe-container'>
				<iframe
					className='responsive-iframe'
					src='https://www.youtube.com/embed/32jFgYES2Uc'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
			</div>
		</section>
	);
}
