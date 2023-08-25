import { NavLink } from 'react-router-dom';
import '../styles/Head.css';

export default function Home() {
  // const STEP__DATA = [
  // "john","Ikenna",

  // ];

  return (
    <section className="">
      <div className="h-[100vh] flex justify-center items-center home">
        <div className="text-[#ffffff] text-center space-y-4">
          <h1 className="flex items-center text-[15px] h-[10vh] md:text-2xl text-white font-poppins">
            {' '}
            <span className="hidden md:block"> Welcome to -</span>
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] via-[#3b2f0a] to-[#8B4513]">
              Adventura
            </span>{' '}
            <span className="items-center"> - Where Stories Unfold</span>
          </h1>
          <p className="italic text-center text-white md:text-xl text-[13px] leading-tight">
            Adventura takes storytelling to new heights with the integration{' '}
            <br />
            of AI narration. As you journey through your chosen stories, our{' '}
            <br />
            AI collaborates to weave a seamless narrative, adding depth and{' '}
            <br />
            immersion to your experience. Words come to life with a touch of{' '}
            <br />
            magic as the AI takes your choices and fashions them into a <br />
            compelling tale that captivates your senses.
          </p>
          <button className="h-[10vh]">
            <NavLink
              to="/signup"
              className="text-white bg-[#8B4513] py-2 px-4 md:py-3 md:px-7 gap-2
            rounded-md border-2 border-gray-900 hover:bg-[#000000cc] hover:text-white mt-6"
            >
              Get Started
            </NavLink>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img src="story.png" alt="" />
            </a>
            <div className="p-5 bg-[#3b2f0a]">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <NavLink
                to="/stories"
                className="inline-flex items-center px-3 py-2 space-x-2 text-sm font-medium text-center text-white bg-[#8B4513] rounded-lg hover:bg-[#000000cc] focus:ring-4"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img src="story.png" alt="" />
            </a>
            <div className="p-5 bg-[#3b2f0a]">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <NavLink
                to="/stories"
                className="inline-flex items-center px-3 py-2 space-x-2 text-sm font-medium text-center text-white bg-[#8B4513] rounded-lg hover:bg-[#000000cc] focus:ring-4"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img src="story.png" alt="" />
            </a>
            <div className="p-5 bg-[#3b2f0a]">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <NavLink
                to="/stories"
                className="inline-flex items-center px-3 py-2 space-x-2 text-sm font-medium text-center text-white bg-[#8B4513] rounded-lg hover:bg-[#000000cc] focus:ring-4"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
