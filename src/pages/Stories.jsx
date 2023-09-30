import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../images/profile.png';
// import Home from './Home';

// import { Image } from 'cloudinary-react';

export default function Stories() {
  const [PublishedStory, setPublishedStory] = useState([]);
  const Navigate = useNavigate();
  const [story, setStories] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStories({ ...story, [name]: value });
  };

  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'fhuqafpc'); // Replace with your Cloudinary upload preset
  //   try {
  //     const response = await fetch(
  //       'https://api.cloudinary.com/v1_1/dsm0ozjbr',
  //       {
  //         method: 'POST',
  //         body: formData,
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       const imageUrl = data.secure_url; // Get the Cloudinary image URL
  //       setStories({ ...story, imageUrl });
  //     } else {
  //       console.error('Image upload failed');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Story Data:', story);
  };

  const handlePublish = (story) => {
    setPublishedStory([...PublishedStory, story]);

    Navigate('/');
  };

  const handleUserProfile = () => {
    Navigate('/userprofile');
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h2 className=" md:text-3xl text-lg font-bold mb-4 text-center text-[#8B4513]">
          Create Your Story
        </h2>
        <div onClick={handleUserProfile} className="cursor-pointer">
          <img src={img} alt="" className="w-12 h-12 rounded-full" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="cursor-pointer">
        <div className="flex items-center justify-center w-full">
          <div className="mb-4 md:w-[50%]">
            {/* <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-2"
            /> */}

            {/* Display the uploaded image */}
            {/* {story.imageUrl && (
              <Image
                cloudName="dsm0ozjbr"
                publicId={story.imageUrl}
                width="150"
                crop="scale"
              />
            )} */}

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
            <div className="mt-3 flex justify-between">
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
                onClick={() =>
                  handlePublish({
                    title: 'Sample',
                    description: 'Sample Description',
                  })
                }
                type="submit"
                className="bg-[#8B4513] text-white px-4 py-2 rounded"
              >
                Save and Publish
              </button>
            </div>
          </div>
        </div>

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
      {/* 
      <Home publishedStories={PublishedStory} /> */}
    </div>
  );
}
