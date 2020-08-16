import React from "react";
import "./App.css";
import One from "./images/1.png";
import Two from "./images/2.png";
import Three from "./images/3.png";
import Four from "./images/4.png";
import first from "./images/11.png";
import second from "./images/3 (1).png";
import third from "./images/1 (1).png";
import four from "./images/2 (1).png";
import whatsapp_icon from "./images/whatsapp_icon.svg";
// import One from "./images/1.png";
function App() {
  return (
    <>
      <div className="main">
        <div className="first">
          <marquee height="100%" direction="up" className="marquee-1">
            <img src={One} className="img" />
            <br />
            <img src={Two} className="img" />
            <br />

            <img src={Three} className="img" />
            <br />

            <img src={Four} className="img" />
            <br />
            <img src={One} className="img" />
            <br />
            <img src={Two} className="img" />
            <br />

            <img src={Three} className="img" />
            <br />

            <img src={Four} className="img" />
            <br />
            <img src={One} className="img" />
            <br />
            <img src={Two} className="img" />
            <br />

            <img src={Three} className="img" />
            <br />

            <img src={Four} className="img" />
            <br />
            <img src={One} className="img" />
            <br />
            <img src={Two} className="img" />
            <br />

            <img src={Three} className="img" />
            <br />

            <img src={Four} className="img" />
          </marquee>
        </div>
        <div className="second">
          <h5 className="animate__animated animate__pulse animate__infinite infinite name">
            Manohar Sirvi
          </h5>
          <p className="animate__animated animate__pulse animate__infinite infinite wish">
            <span style={{ color: "orange" }}>W</span>
            <span style={{ color: "yellow" }}>i</span>
            <span style={{ color: "green" }}>s</span>
            <span style={{ color: "orange" }}>h</span>
            <span style={{ color: "yellow" }}>i</span>
            <span style={{ color: "green" }}>n</span>
            <span style={{ color: "orange" }}>g</span>
            <span style={{ color: "green" }}>Y</span>
            <span style={{ color: "orange" }}>o</span>
            <span style={{ color: "yellow" }}>u</span>
          </p>
          <img
            src="/images/11.png"
            className="img-1 animate__animated animate__zoomIn animate__infinite infinite animate__slow 5s"
          />
          <img
            src="/images/3 (1).png"
            className="img-2 animate__animated animate__shakeX animate__infinite infinite animate__slow 5s"
          />
          <div
            style={{ display: "flex" }}
            className="animate__animated animate__flash animate__infinite infinite animate__slow 5s"
          >
            <img src="/images/1 (1).png" />
            <img src="/images/2 (1).png" />
          </div>
          <h5
            style={{
              color: "#f8c804",
              fontSize: "20px",
              fontWeight: "800",
              lineHeight: "30px",
            }}
            className="text-1"
          >
            I pray to Lord Ganesha
          </h5>
          <h5
            style={{
              color: "#f8c804",
              fontSize: "20px",
              fontWeight: "800",
              lineHeight: "30px",
            }}
            className="text-2"
          >
            that may your life be filled
          </h5>
          <h5
            style={{
              color: "#f8c804",
              fontSize: "20px",
              fontWeight: "800",
              lineHeight: "30px",
            }}
            className="text-3"
          >
            with love and happiness.!!
          </h5>

          <marquee
            width="100%"
            style={{
              fontSize: "30px",
              fontStyle: "italic",
              fontWeight: "600",
              lineHeight: "45px",
              color: "#efbf09",
              marginTop: "20px",
            }}
          >
            Manohar Sirvi Wishing You Happy Ganesh Chaturthi!!
          </marquee>

          <h5 className="btn animate__animated animate__bounce animate__infinite infinite animate__slow 5s">
            😇From Manohar Sirvi😇
          </h5>
        </div>
        <div className="third">
          <marquee height="100%" direction="down" className="marquee-1">
            <img src="images/1.png" className="img" />
            <br />
            <img src="images/2.png" className="img" />
            <br />

            <img src="images/3.png" className="img" />
            <br />

            <img src="images/4.png" className="img" />
            <br />
            <img src="images/1.png" className="img" />
            <br />
            <img src="images/2.png" className="img" />
            <br />

            <img src="images/3.png" className="img" />
            <br />

            <img src="images/4.png" className="img" />
            <br />
            <img src="images/1.png" className="img" />
            <br />
            <img src="images/2.png" className="img" />
            <br />

            <img src="images/3.png" className="img" />
            <br />

            <img src="images/4.png" className="img" />
            <br />
            <img src="images/1.png" className="img" />
            <br />
            <img src="images/2.png" className="img" />
            <br />

            <img src="images/3.png" className="img" />
            <br />

            <img src="images/4.png" className="img" />
          </marquee>
        </div>
      </div>
      <div className="last-main">
        <div className="last-f">
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div className="last-l">
          <button>
            Share
            <span>
              <img src="./images/whatsapp_icon.svg" height="25px" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
