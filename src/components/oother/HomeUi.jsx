import Contact from './contact';

export default function HomeUi() {
  return (
    <>
      <section className="">
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">ABOUT US</h1>

            <p className="text-xl text-[14px] text-right leading-tight">
              Welcome to Adventura, your gateway to a world <br /> of
              interactive storytelling and boundless imagination. <br /> We are
              a passionate team of <br />
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
      <div className="flex">
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

        <Contact />
      </div>
    </>
  );
}
