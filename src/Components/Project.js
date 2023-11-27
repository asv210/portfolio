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
            url1="https://github.com/my1243/BTB---Stock-Management"
            url2="https://youtu.be/DTFHCVua528"
            photo={images["stock.jpg"]}
            name="Stock Management portal"
            description="history of stocks which they buy and sold, favorite stocks list, comparing stocks , get information of each stocks with graph, each of this things with privacy and security which we are providing in our project at free of cost."
          ></ProjectItem>
          <ProjectItem
            url1="https://github.com/asv210/Fortune-Farm"
            url2="https://www.youtube.com/watch?v=Ixp9rAkUXS8"
            photo={images["fortune.jpg"]}
            name="Fortune Farm"
            description="Fortune Farm is an innovative agriculture project that aims to provide farmers with easy access to agriculture products and weather information for better crop management."
          ></ProjectItem>
          <ProjectItem
            url1="https://github.com/asv210/github_profiler"
            url2="https://youtu.be/xJxJCmWMzRY"
            photo={images["githubp.png"]}
            name="Github Profiler Project"
            description="Using my website you will get all information about any user on github
I have used github api via which we will get each information using github username.
Also i have put links below each column through which we will render to github page."
          ></ProjectItem>
          <ProjectItem
            url1="https://github.com/asv210/stopwatch_web"
            url2="https://youtu.be/TtQao3A74I4"
            photo={images["stopwatch.png"]}
            name="Stop Watch"
            description="Same as real time stop watch features like laps , stop , resume and restart."
          ></ProjectItem>
          <ProjectItem
            url1="https://github.com/Rahul2570089/DUHacks"
            url2="https://youtu.be/oPXULuc3eiY"
            photo={images["duhacksp.jpeg"]}
            name="Library Management"
            description="DU Hacks hackathon library online book issue project, used Flutter along with Google Firebase for the back-end which stores data in cloud fire store."
          ></ProjectItem>
          <ProjectItem
            url1="https://github.com/asv210/timer_project"
            url2="https://youtu.be/MurI63gIzcc"
            photo={images["timer.png"]}
            name="Timer Project"
            description="same features as timer like stop ,resume and reset feature."
          ></ProjectItem>
          <ProjectItem
            url1="https://github.com/asv210/dmms_personal"
            url2="https://youtu.be/0_8QZEQFW-w"
            photo={images["dmms.png"]}
            name="Diamond Merchant's Management System (DMMS)"
            description="DMMP has three sections Owner, Manager and Worker. Owner can manage cost and salary , owner can add or remove manager, it can assign diamond to manager on day to day base . manager will assign work to workers according to work assigned by owner and worker will only see that numbers."
          ></ProjectItem>
        </div>
      </div>
    </>
  );
};

export default Projects;
