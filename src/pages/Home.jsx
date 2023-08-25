import { NavLink } from 'react-router-dom';
import '../styles/Head.css';

export default function Home() {
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

      <div>
        <div className="flex ">
          <img src="smile.png" alt="" className="w-[25vw]" />
          <div className="space-y-4 md:text-[16px] p-3 bg-gray-400">
            <h1>Wonders of Thailand </h1>
            <p>
              These cases are perfectly simple and easy to distinguish in a free{' '}
              <br />
              stories, when our power of chioce is untrmmited and when nothing{' '}
              <br />
              prevents our being able to do what we like best, every pleasure is{' '}
              <br />
              to be welcomed and every pleasure is to be welcomed and every pain{' '}
              <br />
              avoided. But in certain circumtances and every pain avoided. But{' '}
              <br />
              is certain circumtances and owing to the claims of duty, ar the{' '}
              <br />
              obiigation of business
            </p>
            <NavLink to={'/stories'}>Read More</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
