import React from "react";
import "../App.css";
import photo from "../Components/images/uw.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="divv1">
        <div className="divv">
          <img
            src={photo}
            width={200}
            height={200}
            style={{
              borderRadius: 200,

              //   marginTop: "15rem",
            }}
            alt=""
            srcset=""
          />
          <div className="ho mt-5">
            <h5 className="hey">Hey! I AM</h5>
            <h1 className="nam">APAR SOLANKI</h1>
            <h3 className="dev">I'm a Developer</h3>
            <a
              className="dev1"
              href="https://drive.google.com/file/d/1NbFkR6WLHhU40nRJIKJxC84PTNVzYiZD/view?usp=sharing"
              target="_blank"
            >
              Here's the resume Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
