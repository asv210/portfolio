import React from "react";
import "../App.css";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
    return images;
  }

  const images = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          <ProjectItem
            url1="https://github.com/Rahul2570089/SDP"
            url2="https://youtu.be/YI-1CpNSa_s"
            photo={images["10.jpg"]}
            name="PullVenture"
            description="PullVenture is a cross platform application which is a one stop platform for budding entrepreneurs for overall support. It is a platform which connects early age start-ups with investors."
          ></ProjectItem>
        </div>
      </div>
    </>
  );
};

export default Projects;
