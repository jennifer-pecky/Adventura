import { Link } from 'react-router-dom';
import '../styles/Head.css';
import HomeUi from '../components/other/HomeUi';
import StoryPage from '../components/other/storyPage';
import card from '../story';
import { useContext } from 'react';
import { AppContext } from '../App';
// import TextToSpeech from '../components/other/TextToSpeech';

export default function Home() {
  // const url =
  //   'https://api-for-adventura-app.onrender.com/api/v1/stories/allstories';
  const { storySelectId, setStorySelectId } = useContext(AppContext);
  // const [data, setData] = useState([]);

  // const fetchCard = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => setData(d))
  // }

  // useEffect(() => {
  //     fetchCard()
  // }, [])

  console.log(storySelectId);

  const handleReadStory = (storyId) => {
    setStorySelectId(storyId);
  };

  return (
    <section className="">
      <div className="h-[100vh] flex justify-center items-center home">
        <div className="text-[#ffffff] text-center space-y-4 w-[90%]">
          <h1 className="flex items-center text-[15px] h-[10vh] md:text-2xl text-white font-poppins ">
            {' '}
            <span className="hidden md:block"> Welcome to -</span>
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-[#8B4513]">
              Adventura
            </span>{' '}
            <span className="items-center"> - Where Stories Unfold</span>
          </h1>
          <p className="italic text-left text-white md:text-xl text-[17px] p-6]">
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

          <Link to={'/signup'}>
            <button className="flex items-center gap-3 p-4 mt-9 bg-[#8B4513] hover:bg-[#000000cc] rounded-md shadow-md transition-all ease-in-out duration-600 text-white font-semibold uppercase text-sm">
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
          </Link>
        </div>
      </div>
      <div className="mt-10 lg:p-16 w-full p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {card.map((item) => (
          <div className="bg-white border rounded-lg shadow-lg" key={item.id}>
            <Link to={`/stories/${item.id}`}>
              <img src={item.Image} alt="" />
              <div className="p-8 bg-[#FFF]">
                <Link to={`/stories/${item.id}`}>
                  <h5 className="mb-2 text-2xl tracking-tight text-[#8B4513] font-bold">
                    {item.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
                  {item.description}
                </p>

                {/* <TextToSpeech storyText={item.content} /> */}

                <button
                  className="btn mt-5"
                  onClick={() => handleReadStory(item.id)}
                >
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
                  <span>Read more</span>
                </button>
              </div>
            </Link>
          </div>
        ))}

        {storySelectId !== null && (
          <StoryPage
            title={card.find((story) => story.id === storySelectId).title}
            content={card.find((story) => story.id === storySelectId).content}
          />
        )}
      </div>

      <HomeUi />
    </section>
  );
}
