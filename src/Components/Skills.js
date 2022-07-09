import React from "react";
import "../App.css";

const Skills = () => {
  return (
    <>
      <div className="back1" style={{ fontWeight: "bolder" }}>
        <div className="college  my-5">
          <h2 style={{ fontWeight: "bolder", color: "white" }}>
            College academics
          </h2>
          <table class="table table-bordered my-4">
            <thead>
              <tr style={{ color: "white" }}>
                <th scope="col">SEM</th>
                <th scope="col">SPI</th>
                <th scope="col">CPI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "white" }}>
                <th scope="row">1</th>
                <td>8.53</td>
                <td>8.53</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">2</th>
                <td>8.56</td>
                <td>8.54</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">3</th>
                <td>8.56</td>
                <td>8.56</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">4</th>
                <td>8</td>
                <td>7.48</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">5</th>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">6</th>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">7</th>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">8</th>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="college">
          <h2 style={{ fontWeight: "bolder ", color: "white" }}>12th class</h2>
          <table class="table table-bordered my-4">
            <thead>
              <tr style={{ color: "white" }}>
                <th scope="col">Exam</th>
                <th scope="col">Marks</th>
                <th scope="col">Percentile</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "white" }}>
                <th scope="row">GSEB (PCM)</th>
                <td>233/400</td>
                <td>93.25</td>
              </tr>
              <tr style={{ color: "white" }}>
                <th scope="row">GUJCET</th>
                <td>96.25/120</td>
                <td>98.54</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="college">
          <h2
            style={{
              fontWeight: "bolder",
              color: "white",
            }}
          >
            10th class
          </h2>
          <table class="table table-bordered my-4">
            <thead>
              <tr style={{ color: "white" }}>
                <th scope="col">Exam</th>
                <th scope="col">Marks</th>
                <th scope="col">Percentile</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "white" }}>
                <th scope="row">GSEB</th>
                <td>539/600</td>
                <td>99.09</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Skills;
