import React from "react";
import "../App.css";

const Contactme = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
    return images;
  }

  const images = importAll(
    require.context("../Components/images", false, /\.(png|jpe?g|svg|webp)$/)
  );

  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div className="box mt-5 mx-5">
          <form
            action="https://formsubmit.co/darknick414@gmail.com"
            method="POST"
          >
            <div className="formm">
              <h1 className="h" style={{ color: "white" }}>
                Contact me
              </h1>
              <label
                className="textform d-flex justify-content-start"
                htmlFor="name"
                style={{ color: "white" }}
              >
                Name
              </label>
              <input
                name="name"
                className="textform mb-3"
                type="text"
                id="name"
              />
              <label
                className="textform d-flex justify-content-start"
                htmlFor="email"
                style={{ color: "white" }}
              >
                Email
              </label>
              <input
                name="email"
                className="textform mb-3"
                type="email"
                id="email"
              />
              <input
                type="hidden"
                name="_next"
                value="https://portfolio-apar1223.vercel.app/"
              />
              <label
                className="textform d-flex justify-content-start"
                htmlFor="message"
                style={{ color: "white" }}
              >
                Message
              </label>
              <textarea
                name="text"
                className="textform "
                type="text"
                id="message"
              />
              <button type="submit" className="form-button">
                Send
              </button>
              <input type="hidden" name="_captcha" value="false" />
            </div>
          </form>
        </div>
      </div>
      <h2 className="con" style={{ color: "white" }}>
        You can also contact me at
      </h2>
      <div className="icons-box">
        <div className="icon1">
          <a
            href="https://www.linkedin.com/in/apar-solanki-669b731bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              width="30"
              height="30"
              src={images["LinkedIn.png"]}
              alt=""
            ></img>
          </a>
        </div>
        <div className="icon1">
          <a
            href="https://www.instagram.com/apar_21_02/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              width="30"
              height="30"
              src={images["Instagram.webp"]}
              alt=""
            ></img>
          </a>
        </div>
        <div className="icon1">
          <a
            href="http://github.com/apar1223"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              width="30px"
              height="30px"
              src={images["git.png"]}
              alt=""
            ></img>
          </a>
        </div>
        <div className="icon1">
          <a
            href="https://twitter.com/apar_159"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon"
              width="30"
              height="30"
              src={images["twitter.png"]}
              alt=""
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contactme;
