import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import TitleComponent from '../../Shared/TitleComponent';
import VideoBackgroundComponent from '../../Shared/VideoBackgroundComponent';
import VideoTitleSection from '../VideoTitleSection';
import './header-section.scss';

interface HeaderSectionProps {}

export default function HeaderSection({}: HeaderSectionProps) {
	return (
		<VideoBackgroundComponent uri={'fKNdoxRld34'}>
			<div className='wrapper'>
				<Navbar bg='light' expand='lg'>
					<Container>
						<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='me-auto'>
								<Nav.Link href='#home'>Home</Nav.Link>
								<Nav.Link href='#link'>Link</Nav.Link>
								<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
									<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.2'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<main>
					<img src='#' alt='nopare logo' />
					<TitleComponent>Segurança em movimento</TitleComponent>
				</main>
			</div>
		</VideoBackgroundComponent>
	);
}
