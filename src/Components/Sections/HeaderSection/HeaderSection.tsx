import VideoBackgroundComponent from '../../VideoBackgroundComponent';
import VideoTitleSection from '../VideoTitleSection';
import './header-section.scss';

interface HeaderSectionProps {}

export default function HeaderSection({}: HeaderSectionProps) {
	return (
		<section>
			<VideoTitleSection></VideoTitleSection>
			<nav>
				<ul>
					<li>algo</li>
					<li>outro </li>
					<li>algo 2</li>
				</ul>
			</nav>
			<main>
				<img src='#' alt='nopare logo' />
				<h1>Title</h1>
			</main>
		</section>
	);
}
