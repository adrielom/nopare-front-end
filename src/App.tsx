import './App.scss';
import HeaderSection from './Components/Sections/HeaderSection';
import StorySection from './Components/Sections/StorySection';
import TestesSection from './Components/Sections/TestesSection';
import TheaterVideoSection from './Components/Sections/TheaterVideoSection';
import VideoArticleSection from './Components/Sections/VideoArticleSection';

import Pneu from './assets/images/pneu.png';
import { TitleComponent } from './Components/Shared/TitleComponent';
import { HeaderTitleComponent } from './Components/Shared/HeaderTitleComponent/HeaderTitleComponent';
import { VscFilePdf } from 'react-icons/all';
import ContactMeSection from './Components/Sections/ContactMeSection';
import SocialNetworkSection from './Components/Sections/SocialNetworkSection';
import { ScrollingProvider, Section } from 'react-scroll-section';

function App() {
	return (
		<div className='App'>
			<ScrollingProvider>
				<Section id='home'>
					<HeaderSection />
				</Section>
				<Section id='aboutUs'>
					<StorySection />
				</Section>
				<Section id='noPare'>
					<TheaterVideoSection />
				</Section>
				<Section id='testes'>
					<VideoArticleSection videoUri='https://www.youtube.com/embed/32jFgYES2Uc'>
						<p>
							A escalada da violência nos centros urbanos fez da tranquilidade
							de contar com uma eficiente proteção balística pelas ruas da
							cidade um quesito essencial para a qualidade de vida. Mas o carro
							blindado, embora muito mais seguro, não é um tanque de guerra: a
							integridade de seus ocupantes requer movimento, pois disparos
							sequenciais concentrados são capazes de ultrapassar as barreiras
							de proteção. É aí que entram as cintas No Pare.
						</p>
						<p>
							Alvos estáticos são bem mais fáceis de acertar – por isso a
							prática comum de atirar nos pneus. Além disso, rasgos causados por
							obstáculos durante manobras de fuga ou furos de pregos e
							armadilhas também podem impedir a rápida evasão em uma situação de
							risco. As cintas especiais de proteção No Pare permitem que até
							com os pneus vazios um grande trajeto seja percorrido em
							velocidade, por qualquer terreno, sem comprometimento da
							estabilidade do veículo.
						</p>
					</VideoArticleSection>
					<TestesSection />
				</Section>
				<Section id='suporte'>
					<div
						id='tire-background-image'
						style={{ backgroundImage: `url(${Pneu})` }}>
						<HeaderTitleComponent
							style={{ margin: '0 5em', zIndex: 4, position: 'relative' }}
							color='#d39326'>
							:: suporte
						</HeaderTitleComponent>
						<div className='tire-background-image-overlay'></div>
						<VideoArticleSection videoUri='https://www.youtube.com/embed/_gyxsA1hmk8'>
							<TitleComponent id='cintas-title'>
								Veja como é fácil e rápido instalar as cintas No Pare.
							</TitleComponent>
							<a href='/manual.pdf' download='manual.pdf'>
								<div className='rounded-button'>
									<VscFilePdf size={25} style={{ marginRight: 10 }} />
									baixe o manual
								</div>
							</a>
						</VideoArticleSection>
					</div>
				</Section>
				<Section id='contato'>
					<SocialNetworkSection />
				</Section>
				<Section id='revendedores'>
					<ContactMeSection />
				</Section>
				<footer>
					<p>© NoPare</p>
				</footer>
			</ScrollingProvider>
		</div>
	);
}

export default App;
