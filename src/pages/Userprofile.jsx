import { Link, Routes, Route } from 'react-router-dom';
import img from '../images/profile.png';
import Fire from './fire';
import About from './About';
import Lists from './Lists';

function Userprofile() {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col-reverse md:flex-row border border-gray-300 md:p-16">
        <div className="md:w-[50%] border-r border-gray-300">
          <div className="flex flex-col space-y-6 w-full md:p-[50px]">
            <h1 className="uppercase font-bold text-5xl text-[#8B4513] text-center">
              Profile
            </h1>
            <div className="flex space-x-7 text-[15px]">
              <Link to="/userprofile/home">Home</Link>
              <Link to="/userprofile/lists">Lists</Link>
              <Link to="/userprofile/about">About</Link>
            </div>
            <Routes>
              <Route path="/" element={<Fire />} />
              <Route path="home" element={<Fire />} />
              <Route path="lists" element={<Lists />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
        </div>
        <div className="md:w-[50%] md:pt-24">
          <div className="flex flex-col items-center w-full p-4 md:p-0 space-y-8">
            <img src={img} alt="" className="w-24 h-24 rounded-full" />
            <h1 className="text-center font-bold text-4xl text-[#8B4513]">
              Jennifer Chioma
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Userprofile;
