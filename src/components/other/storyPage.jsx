import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import card from '../../story';

const StoryPage = () => {
  const { id } = useParams();
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    const story = card.find((story) => story.id === id);

    if (story) {
      setSelectedStory(story);
    }
  }, [id]);

  if (!selectedStory) {
    return <div>Loading ....</div>;
  }

  return (
    <div className="story-page">
      <h2 className="story-title text-center font-bold md:text-4xl">
        {selectedStory.title}
      </h2>
      <p className="story-content">{selectedStory.content}</p>
    </div>
  );
};

export default StoryPage;
