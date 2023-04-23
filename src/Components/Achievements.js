import React from "react";
import "../App.css";

const Achievements = () => {
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
      <div className="achi">
        <h2
          className="pr"
          style={{
            marginTop: "2rem",
            color: "white",
          }}
        >
          Progress On Various Platform
        </h2>
        <div className="plat">
          <a target="_blank" href="https://leetcode.com/apar1223/">
            <img
              className="pic1"
              src={images["leetcode.png"]}
              height={75}
              width={200}
              alt=""
            />
          </a>
          <a target="_blank" href="https://www.hackerrank.com/solankiapar12">
            <img
              className="pic2"
              src={images["hackerank-logo.png"]}
              height={75}
              width={200}
              alt=""
            />
          </a>

          <a target="_blank" href="https://codeforces.com/profile/apar1223">
            <img
              className="pic3"
              src={images["codeforces.png"]}
              height={75}
              width={200}
              alt=""
            />
          </a>

          <a target="_blank" href="https://www.codechef.com/users/apar1223">
            <img
              className="pic4"
              src={images["download.png"]}
              height={75}
              width={200}
              alt=""
            />
          </a>

          <a target="_blank" href="https://github.com/asv210">
            <img
              className="pic5"
              src={images["github2.png"]}
              height={75}
              width={200}
              alt=""
            />
          </a>
        </div>

        <div className="cer">
          <h2
            className="certe"
            style={{ marginTop: "8rem", fontWeight: "4rem", color: "white" }}
          >
            Certificates
          </h2>
          <div className="kets " my-auto width="200">
            <a
              className="ud my-auto"
              href="http://https://www.udemy.com/certificate/UC-349ae51b-41d3-48a6-a93a-e9c9d5dfb269/"
              target="_blank"
            >
              <img src={images["udemy.png"]} height="40px" alt="" />
              <h5 className="ude my-auto">
                PYTHON Programming for Beginners - 2022
              </h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="http://https://www.udemy.com/certificate/UC-349ae51b-41d3-48a6-a93a-e9c9d5dfb269/"
              target="_blank"
            >
              <img src={images["greatlearning.png"]} height="40px" alt="" />
              <h5 className="ude my-auto"> Introduction to DevOps</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
