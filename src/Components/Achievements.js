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
              href="https://www.udemy.com/certificate/UC-349ae51b-41d3-48a6-a93a-e9c9d5dfb269/"
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
              href="https://olympus.mygreatlearning.com/courses/38652/certificate/"
              target="_blank"
            >
              <img src={images["greatlearning.png"]} height="40px" alt="" />
              <h5 className="ude my-auto"> Introduction to DevOps</h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="https://www.credly.com/badges/5c08d826-7cb4-45b0-bc5e-24018936f52d/public_url"
              target="_blank"
            >
              <img src={images["aws.png"]} height="40px" alt="" />
              <h5 className="ude my-auto"> AWS Academy Cloud Foundations </h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="https://drive.google.com/file/d/1DEp_BypoUPJ7JjMzJVCI7llZvNbwHyN6/view"
              target="_blank"
            >
              <img src={images["btb.png"]} height="40px" alt="" />
              <h5 className="ude my-auto">BTB hackathon winner</h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="https://drive.google.com/file/d/1DVrg748IW56L1bzAUtVbTkRTdw9v9tdU/view?usp=sharing"
              target="_blank"
            >
              <img src={images["duhacks.jpeg"]} height="40px" alt="" />
              <h5 className="ude my-auto">DU HACKS hackathon</h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="https://www.theforage.com/achievements?ref=7n3e5BmFEeoj8gLKA/"
              target="_blank"
            >
              <img src={images["forage.png"]} height="40px" alt="" />
              <h5 className="ude my-auto">
                J.P. Morgan Software Engineering Virtual Experience
              </h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="https://drive.google.com/file/d/1DRX4tYHPop5oJG3iaPZvLCN8TZro5_Jo/view"
              target="_blank"
            >
              <img src={images["duhacks.jpeg"]} height="40px" alt="" />
              <h5 className="ude my-auto">DU HACKS 2.0 hackathon</h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="https://drive.google.com/file/d/1D89wYydqPoa8sDOJYUweGi6sLf-S3o-F/view"
              target="_blank"
            >
              <img src={images["gfg.png"]} height="40px" alt="" />
              <h5 className="ude my-auto">Solving for india hackathon</h5>
            </a>
          </div>
          <div className="my-auto" width="200">
            <a
              className="ud"
              href="https://badgr.com/backpack/badges/647da7254f07b5650c610f45"
              target="_blank"
            >
              <img src={images["postman.png"]} height="40px" alt="" />
              <h5 className="ude my-auto">
                Postman API Fundamentals Student Expert
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
