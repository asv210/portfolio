import React from "react";
import "../App.css";
import photo from "../Components/images/uwhe.jpg";

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
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
