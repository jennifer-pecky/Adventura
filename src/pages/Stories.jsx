import { useState } from 'react';

export default function Stories() {
  const [story, setStories] = useState({
    title: '',
    author: '',
    description: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStories({ ...story, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Story Data:', story);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#8B4513]">
        Create Your Story
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600">
            Story Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={story.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={story.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-600">
            Story Content
          </label>
          <textarea
            id="content"
            name="content"
            value={story.content}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-[#8B4513] text-white px-4 py-2 rounded"
          >
            Save and Publish
          </button>
        </div>
      </form>
    </div>
  );
}
