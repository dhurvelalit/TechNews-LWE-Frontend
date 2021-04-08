import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    <div className="HomePageContainer">
      <div className="HomePage">
        <div className="Header">This will be header</div>
        <div className="NavBar">This will be navigation bar</div>
        <div className="ChatWindow">
          <div className="NewsGrid">
            <div className="Row">
              <div className="Column">1</div>
              <div className="Column">2</div>
            </div>
            <div className="Row">
              <div className="Column">3</div>
              <div className="Column">4</div>
            </div>
          </div>
          <div className="Reference">
            <div className="LWE">Learn With Engineers</div>
            <div className="TechiPedia">Techipedia</div>
            <div className="Tools">Tools</div>
            <div className="MiniAd">MiniAd</div>
          </div>
        </div>
        <div className="Footer">This will be footer</div>
      </div>
    </div>
  );
};

export default HomePage;
