import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Stories() {
  const [story, setStories] = useState({
    title: '',
    description: '',
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
      <form onSubmit={handleSubmit} className="">
        <div className="flex items-center justify-center w-full">
          <div className="mb-4 md:w-[50%]">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Story Title"
              value={story.title}
              onChange={handleChange}
              className="w-full  rounded px-3 py-2 bg-[#F5F5F5]"
            />

            <div className="mt-10">
              <textarea
                id="description"
                name="description"
                value={story.description}
                placeholder="Write your story here...."
                onChange={handleChange}
                className="w-full rounded px-3 py-3 bg-[#F5F5F5] "
              />
            </div>
            <div className="mt-3 flex justify-around">
              <Link to={'/'}>
                {' '}
                <button
                  type="submit"
                  className="bg-[#8B4513] text-white px-4 py-2 rounded"
                >
                  Back to home
                </button>
              </Link>

              <button
                type="submit"
                className="bg-[#8B4513] text-white px-4 py-2 rounded"
              >
                Save and Publish
              </button>
            </div>
          </div>
        </div>

        <Link to={'/userprofile'}>click</Link>

        {/* <div className="mb-4">
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
        </div> */}
      </form>
    </div>
  );
}
