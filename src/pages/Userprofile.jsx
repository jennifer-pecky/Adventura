import { Link, Routes, Route } from 'react-router-dom';
import img from '../images/profile.png';
import Fire from './fire';
import About from './About';
import Lists from './Lists';

function Userprofile() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-[50vh] w-full">
        <div className="flex flex-col justify-center items-center h-[50vh] w-full">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0">
            <div className="flex flex-col space-y-6 md:pr-40">
              <h1 className="uppercase font-bold text-5xl">Profile</h1>
              <div className="flex space-x-7">
                <Link to="/userprofile/home">Home</Link>
                <Link to="/userprofile/lists">Lists</Link>
                <Link to="/userprofile/about">About</Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src={img} alt="" className="w-24 h-24 rounded-full" />
              <h1 className="text-center font-medium ">Jennifer Chioma</h1>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="home" element={<Fire />} />
        <Route path="lists" element={<Lists />} />
        <Route path="about" element={<About />} />
      </Routes>
    </section>
  );
}

export default Userprofile;
