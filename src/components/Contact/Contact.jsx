import React, { useEffect, useState } from "react";
import "./Contact.css";
import Mydata from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [linkArr, setArr] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    setArr(Mydata.myLink);
  }, []);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div className="contact-screen">
        <div className="contact-main-container">
          <span
            className="contact-Initial"
            onClick={() => {
              navigate("/");
            }}
          ></span>
          <div className="contact-Container">
            <div className="contact-Heading">
              <h1>Let's Make something Great</h1>
            </div>
            <div className="contact-container-Content">
              <span className="contact-content-head">Contact</span>
              <div className="contact-content">
                <div className="contact-texter">
                  Contact I'm seeking out opportunities to collaborate with
                  companies / agencies / individuals, not just work for them. I
                  want to bring my collective design experience to the table
                  where we can work together to solve real business-problems in
                  a way that optimizes all of our respective experience and
                  knowledge. I want to avoid subjective pissing-matches, and
                  favor open-minded collaborators where egos are out of the
                  equation. If that all sounds about right, then lets for sure
                  chat about how we can work together. Feel free to reach out
                  through any platforms bellow:
                </div>
                {linkArr.map((res, index) => {
                  return (
                    <>
                      <div key={res.id}>
                        <div className="contact-Bold-about">{res.Name}</div>
                        <div className="contact-texter">
                          <a href={res.link} download={index == 0}>
                            {res.showName}
                          </a>
                          {index != 0 && (
                            <span
                              className="clipboard-icon"
                              onClick={() => copyToClipboard(res.link)}
                            >
                              <FontAwesomeIcon
                                icon={index == 0 ? faDownload : faClipboard}
                              />
                            </span>
                          )}
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

export default Contact;
