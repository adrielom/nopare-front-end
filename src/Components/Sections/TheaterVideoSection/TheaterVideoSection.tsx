import { HeaderTitleComponent } from '../../Shared/HeaderTitleComponent/HeaderTitleComponent';
import { TitleComponent } from '../../Shared/TitleComponent';
import YoutubeBackgroundComponent from '../../Shared/YoutubeBackgroundComponent';
import './theater-video-section.scss';

interface TheaterVideoSectionProps {}

export default function TheaterVideoSection({}: TheaterVideoSectionProps) {
	let color = '#d39326';

	const Content = () => {
		return (
			<section>
				<HeaderTitleComponent color={color}>:: no pare</HeaderTitleComponent>
				<div className='title-component-wrapper'>
					<TitleComponent
						style={{
							color,
						}}
						className='title-component'>
						As cintas protetivas que não deixam seu carro parar de rodar.
					</TitleComponent>
				</div>
			</section>
		);
	};

	return (
		<YoutubeBackgroundComponent
			className='video-background'
			src={'XiMgTRpK6Sk'}>
			<Content />
		</YoutubeBackgroundComponent>
	);
}
