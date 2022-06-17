import './App.scss';
import HeaderSection from './Components/Sections/HeaderSection';
import StorySection from './Components/Sections/StorySection';
import TestesSection from './Components/Sections/TestesSection';
import TheaterVideoSection from './Components/Sections/TheaterVideoSection';
import VideoArticleSection from './Components/Sections/VideoArticleSection';

function App() {
	return (
		<div className='App'>
			<HeaderSection />
			<StorySection />
			<TheaterVideoSection />
			<VideoArticleSection />
			<TestesSection />
		</div>
	);
}

export default App;
