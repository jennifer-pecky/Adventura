import { Link } from 'react-router-dom';
import img from '../images/profile.png';

function Userprofile() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-[50vh] w-full">
        <div className="flex flex-col justify-center items-center h-[50vh] w-full">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0">
            <div className="flex flex-col space-y-6 md:pr-40">
              <h1 className="uppercase font-bold text-5xl">Profile</h1>
              <div className="flex space-x-7">
                <Link to="/home">Home</Link>
                <Link to="/lists">Lists</Link>
                <Link to="/about">About</Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src={img} alt="" className="w-24 h-24 rounded-full" />
              <h1 className="text-center font-medium ">Jennifer Chioma</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Userprofile;
