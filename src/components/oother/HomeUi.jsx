import { BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
export default function HomeUi() {
  return (
    <>
      <div>
        <section className="">
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
            <div className="text-center">
              <h1 className="text-4xl font-semibold">ABOUT US</h1>

              <p className="text-xl text-[14px] md:text-right leading-tight">
                Welcome to Adventura, your gateway to a world <br /> of
                interactive storytelling and boundless imagination. <br /> We
                are a passionate team of <br />
                creators, developers and storytellers who <br /> believes in the
                power of <br />
                narratives that comes to life through your chioces. <br />
              </p>
            </div>

            <div>
              <img src="plat.png" alt="" />
            </div>
          </div>
        </section>
        <div className="flex space-x-20">
          <div className="form-container">
            <div className="form">
              <span className="heading">Get in touch</span>
              <input placeholder="Name" type="text" className="input" />
              <input
                placeholder="Email"
                id="mail"
                type="email"
                className="input"
              />
              <textarea
                placeholder="Say Hello"
                rows="10"
                cols="30"
                id="message"
                name="message"
                className="textarea"
              ></textarea>
              <div className="button-container">
                <div className="send-button">Send</div>
                <div className="reset-button-container">
                  <div id="reset-btn" className="reset-button">
                    Reset
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="">
              <h1 className="text-[#0e0d09] font-bold text-2xl">
                Connect with us
              </h1>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/your_twitter_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-150"
                >
                  <BsLinkedin className="text-[#0E0D09] text-5xl" />
                </a>
                <a
                  href="https://twitter.com/your_twitter_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-150"
                >
                  <BsTwitter className="text-[#0E0D09] text-5xl" />
                </a>
                <a
                  href="https://twitter.com/your_twitter_profile"
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
      </div>
    </>
  );
}
