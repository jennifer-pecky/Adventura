// import './storyPage.css'; // Import your CSS file\
import { useParams } from 'react-router-dom';
import card from '../../story';

const StoryPage = () => {
  const { id } = useParams();
  const selectedStory = card.find((story) => story.id === id);

  if (!selectedStory) {
    return (
      <div>
        this page can`t be found because you have not figure out the error{' '}
      </div>
    );
  }

  return (
    <div className="story-page">
      <h2 className="story-title">{selectedStory.title}</h2>
      <p className="story-content">{selectedStory.content}</p>
    </div>
  );
};

export default StoryPage;
