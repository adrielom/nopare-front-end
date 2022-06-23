import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';
import { TitleComponent } from '../../Shared/TitleComponent';
import './testes-section.scss';

export default function TestesSection() {
	return (
		<div className='testes-section'>
			<HeaderTitleComponent>:: testes</HeaderTitleComponent>
			<div className='testes-wrapper'>
				<main>
					<TitleComponent>
						Eficiência testada e comprovada, para você não depender da sorte.
					</TitleComponent>
					<div>
						<div className='video-container'>
							<iframe
								className='video-responsive-iframe'
								width='560'
								height='315'
								src='https://www.youtube.com/embed/htHzdTMI60Y'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen></iframe>
						</div>
					</div>
				</main>
				<div className='text-section'>
					<div>
						<p>
							A No Pare submeteu suas cintas protetivas aos mais rigorosos
							testes de resistência, com disparos de alguns dos mais efetivos e
							potentes calibres de armas de fogo, seguidos de pilotagem em
							condição de fuga. Confira os resultados nos vídeos.
						</p>
					</div>
					<div className='video-container-parent'>
						<div className='video-container'>
							<iframe
								className='video-responsive-iframe'
								width='560'
								height='315'
								src='https://www.youtube.com/embed/RXRzciFeYsc'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
