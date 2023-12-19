import React, { useEffect, useState } from "react";
import "./Work.css";
import Mydata from "../../data/data";
import { useNavigate } from "react-router-dom";
const Work = () => {
  let navigate = useNavigate();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(Mydata.mywork);
  }, []);

  return (
    <>
      <div className="work-screen">
        <div className="work-container">
          <span
            className="work-Initial"
            onClick={() => {
              navigate("/");
            }}
          ></span>
          <div className="work-Container">
            <div className="work-container-Content">
              <span className="work-content-head">Works</span>
              <div className="work-content">
                {arr.map((res) => {
                  return (
                    <>
                      <div>
                        <div className="work-Bold-about">{res.Name}</div>
                        <div className="work-texter">
                          <a key={res.id} href={res.link}>
                            Link of {res.Name}
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
