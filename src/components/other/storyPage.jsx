import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import card from '../../story';
// import TextToSpeech from './TextToSpeech'; // Import the TextToSpeech component

const StoryPage = () => {
  const { id } = useParams();
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    const story = card.find((story) => story.id === id);
    console.log('the use effect just ran');

    if (story) {
      setSelectedStory(story);
    }
  }, [id]);

  if (!selectedStory) {
    return <div>Loading ....</div>;
  }

  return (
    <div>
      <div className="story-page">
        <h2 className="story-title text-center font-bold md:text-4xl text-[#8B4513]">
          {selectedStory.title}
        </h2>
        <br />
        <p className="story-content md:text-[20px] md:text-center leading-2">
          {selectedStory.content}
        </p>
      </div>
      {/* {selectedStory && <TextToSpeech storyText={selectedStory.content} />} */}

      <Link
        to={'/'}
        className="py-1 px-5 bg-[#8B4513] text-white rounded-lg fixed bottom-0 right-7"
      >
        Back
      </Link>
    </div>
  );
};

export default StoryPage;
