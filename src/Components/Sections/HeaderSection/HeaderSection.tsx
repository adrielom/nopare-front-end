import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { TitleComponent } from '../../Shared/TitleComponent';
import VideoBackgroundComponent from '../../Shared/VideoBackgroundComponent';
import VideoTitleSection from '../VideoTitleSection';
import './header-section.scss';
import Logo from '../../../assets/svgs/nopare - white.svg';
import CarVideo from '../../../assets/videos/home.webm';

interface HeaderSectionProps {}

export default function HeaderSection({}: HeaderSectionProps) {
	return (
		<VideoBackgroundComponent uri={CarVideo}>
			<div className='wrapper'>
				<Navbar className='navbar' bg='transparent' expand='lg'>
					<Container>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse
							id='basic-navbar-nav'
							className='justify-content-end'>
							<Nav>
								<Nav.Link href='#home'>home</Nav.Link>
								<Nav.Link href='#link'>sobre nós</Nav.Link>
								<Nav.Link href='#link'>no pare</Nav.Link>
								<Nav.Link href='#link'>testes</Nav.Link>
								<Nav.Link href='#link'>suporte</Nav.Link>
								<Nav.Link href='#link'>contato</Nav.Link>
								<Nav.Link href='#link'>revendedores</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<main>
					<img src={Logo} alt='nopare logo' />
					<TitleComponent
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
		</VideoBackgroundComponent>
	);
}
