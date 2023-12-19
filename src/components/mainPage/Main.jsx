import React, { useState } from "react";
import "./Main.css";
import Mydata from "../../data/data";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();
  //  Hooks
  const [hoveredIndex, setHoveredIndex] = useState(null);
  //  Defines
  const arr = Mydata.mainArr;
  const hovered = Mydata.hoveredArr;
  // Methods
  const handleRoute = (e) => {
    let target = e.target.innerText.toLowerCase();
    console.log(target);
    navigate(`/${target}`);
  };
  return (
    <>
      <div className="screen-class">
        <div className="container">
          <div className="left-text">
            {arr.map((res, index) => (
              <h1
                key={index}
                style={{
                  color: index === 1 || index === 2 ? "red" : "white"
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={handleRoute}
              >
                {hoveredIndex === index ? hovered[index] : res}
              </h1>
            ))}
          </div>
          <div className="right-Img">
            <div className="gate">
              <div className="hoarding">
                <p>Open Gate</p>
              </div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
