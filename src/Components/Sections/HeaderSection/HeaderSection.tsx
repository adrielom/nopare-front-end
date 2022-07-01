import { Container, Nav, Navbar } from 'react-bootstrap';
import { TitleComponent } from '../../Shared/TitleComponent';
import VideoBackgroundComponent from '../../Shared/VideoBackgroundComponent';
import './header-section.scss';
import Logo from '../../../assets/svgs/nopare - white.svg';
import CarImage from '../../../assets/images/noparecar.png';
import { useScrollSection } from 'react-scroll-section';
import { osName, OsTypes } from 'react-device-detect';
import ImageBackgroundComponent from '../../Shared/ImageBackgroundComponent/ImageBackgroundComponent';
import YoutubeBackgroundComponent from '../../Shared/YoutubeBackgroundComponent';

interface HeaderSectionProps {}

export default function HeaderSection({}: HeaderSectionProps) {
	const homeSection = useScrollSection('home');
	const aboutUsSection = useScrollSection('aboutUs');
	const noPareSection = useScrollSection('noPare');
	const testesSection = useScrollSection('testes');
	const suporteSection = useScrollSection('suporte');
	const contatoSection = useScrollSection('contato');
	const revendedoresSection = useScrollSection('revendedores');

	const Content = () => {
		return (
			<>
				<div className='wrapper'>
					<Navbar className='navbar' bg='transparent' expand='lg'>
						<Container>
							<Navbar.Toggle
								onClick={() => console.log('hey')}
								aria-controls='basic-navbar-nav'
							/>
							<Navbar.Collapse
								id='basic-navbar-nav'
								className='justify-content-end'>
								<Nav>
									<Nav.Link onClick={homeSection.onClick}>home</Nav.Link>
									<Nav.Link onClick={aboutUsSection.onClick}>
										sobre nós
									</Nav.Link>
									<Nav.Link onClick={noPareSection.onClick}>no pare</Nav.Link>
									<Nav.Link onClick={testesSection.onClick}>testes</Nav.Link>
									<Nav.Link onClick={suporteSection.onClick}>suporte</Nav.Link>
									<Nav.Link onClick={contatoSection.onClick}>contato</Nav.Link>
									<Nav.Link onClick={revendedoresSection.onClick}>
										revendedores
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
					<main>
						<img className='home-logo' src={Logo} alt='nopare logo' />
						<TitleComponent
							className='home-title'
							style={{
								color: 'white',
								fontSize: '1.95rem',
								justifyContent: 'center',
								textAlign: 'center',
							}}>
							Segurança em movimento.
						</TitleComponent>
					</main>
				</div>
			</>
		);
	};

	return (
		<YoutubeBackgroundComponent
			image={CarImage}
			className='home-section'
			src={'72fF4YLUJqE'}>
			<Content />
		</YoutubeBackgroundComponent>
	);
}
