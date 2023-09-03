import { BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
export default function HomeUi() {
  return (
    <>
      <div>
        <section className="">
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0  abt-us">
            <div className="text-left w-[45%] my-txt">
              <h1 className="md:text-4xl  font-semibold text-[#8B4513]">
                ABOUT US
              </h1>

              <p className="md:text-[18px] text-[13px] text-left leading-[2] ">
                Welcome to Adventura, your gateway to a world <br /> of
                interactive storytelling and boundless imagination. <br /> We
                are a passionate team of <br />
                creators, developers and storytellers who <br /> believes in the
                power of <br />
                narratives that comes to life through your choices. <br />
              </p>
            </div>

            <div className="  w-[45%] my-img">
              <img src="stories.png" alt="" />
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 h-screen">
          <div className="card md:w-[55%]">
            <span className="title">Leave a Comment</span>
            <form className="form">
              <div className="group">
                <input placeholder="‎" type="text" required="" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="group">
                <input
                  placeholder="‎"
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="group">
                <textarea
                  placeholder="‎"
                  id="comment"
                  name="comment"
                  rows="5"
                  required=""
                ></textarea>
                <label htmlFor="comment">Comment</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start max-w-lg  w-[55%]">
            <h1 className="text-[#0e0d09] font-bold text-2xl text-center md:text-left">
              Connect with us
            </h1>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a
                href="https://www.linkedin.com/in/jennifer-chioma-maduagwu-7051ab236/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-150"
              >
                <BsLinkedin className="text-[#0E0D09] text-5xl" />
              </a>
              <a
                href="https://twitter.com/pecky_jennifer"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-150"
              >
                <BsTwitter className="text-[#0E0D09] text-5xl" />
              </a>
              <a
                href="https://www.instagram.com/jenniferpecky/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-150"
              >
                <BsInstagram className="text-[#0E0D09] text-5xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
