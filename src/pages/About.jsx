import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gray-200 p-12">
      <div className=" w-full text-center md:space-y-4">
        <h1 className="font-bold text-[#8B4513]">
          Tell the world about yourself
        </h1>
        <p>
          Here`s where you can share more about yourself, your history,work
          experience, accomplishment, interest, dreams and more you can even add
          images and use text to personalize your bio
        </p>

        <Link to={'/'}>Get started</Link>
      </div>
    </div>
  );
}
