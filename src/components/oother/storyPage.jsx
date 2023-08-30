// import './storyPage.css'; // Import your CSS file

const StoryPage = ({ title, content }) => {
  return (
    <div className="story-page">
      <h2 className="story-title">{title}</h2>
      <p className="story-content">{content}</p>
    </div>
  );
};

export default StoryPage;
