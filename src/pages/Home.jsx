import { NavLink } from 'react-router-dom';
import '../styles/Head.css';
import HomeUi from '../components/oother/HomeUi';

export default function Home() {
  const CARD = [
    {
      Image: 'plat.png',
      title: 'Noteworthy technology acquisitions 2021',
      description:
        'Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order',
    },

    {
      Image: 'plat.png',
      title: 'Noteworthy technology acquisitions 2021',
      description:
        'Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order',
    },

    {
      Image: 'plat.png',
      title: 'Noteworthy technology acquisitions 2021',
      description:
        'Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order',
    },
  ];

  return (
    <section className="">
      <div className="h-[100vh] flex justify-center items-center home border-red-500 border-[1px]">
        <div className="text-[#ffffff] text-center space-y-4  border-red-500 border-[1px] w-[90%]">
          <h1 className="flex items-center text-[15px] h-[10vh] md:text-2xl text-white font-poppins  border-red-500 border-[1px]">
            {' '}
            <span className="hidden md:block"> Welcome to -</span>
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] via-[#3b2f0a] to-[#8B4513]">
              Adventura
            </span>{' '}
            <span className="items-center"> - Where Stories Unfold</span>
          </h1>
          <p className="italic text-left text-white md:text-xl text-[17px] p-6 border-blue-500 border-[1px]">
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
          {/* <button className="h-[10vh]">
            <NavLink
              to="/signup"
              className="text-white bg-[#8B4513] py-2 px-4 md:py-3 md:px-7 gap-2
            rounded-md border-2 border-gray-900 hover:bg-[#000000cc] hover:text-white mt-6"
            >
              Get Started
            </NavLink>
          </button> */}
          <NavLink to={'/stories'}>
            <button className="flex items-center gap-3 p-4  bg-[#8B4513] hover:bg-[#000000cc] rounded-md shadow-md transition-all ease-in-out duration-600 text-white font-semibold uppercase text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                ></path>
              </svg>
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-10 lg:p-7 p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {CARD.map((item) => (
          <div
            className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg"
            key={item.id}
          >
            <NavLink to={'/stories'}>
              <img src="story.png" alt="" />
            </NavLink>
            <div className="p-5 bg-[#FFF]">
              <a href="#">
                <h5 className="mb-2 text-2xl tracking-tight text-[#8B4513] font-bold">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
                {item.description}
              </p>
              {/* <NavLink
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
              </NavLink> */}
              <NavLink to={'/stories'}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    ></path>
                  </svg>
                  <span>Launch</span>
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <HomeUi />
    </section>
  );
}
