import React from "react";
import { TransitEnterexit } from "@material-ui/icons";
import gaules from "../../images/gaules.png";
import cogu from "../../images/cogu.png";

import "./styles.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="sideBarContainer">
      <div className="sideBarGroup">
        <div className="followedChannels">
          <div className="sideBarTitle">
            <h2>CANAIS QUE SEGUES</h2>
          </div>
          <div className="sideBarHideShowContainer">
            <button className="buttonHideShow">
              <TransitEnterexit className="sideBarHideShowIcon" />
            </button>
          </div>
          <div className="sideBarChannelContainer">
            <div className="channelPhoto">
              <img className="photo" alt="hero" src={gaules} />
            </div>
            <div className="channelTitles">
              <h1>Gaules</h1>
              <span> Counter-Strike</span>
            </div>
          </div>
          <div className="sideBarViewNumber">
            <p>17,3 mil</p>
          </div>
          <div className="sideBarChannelContainer">
            <div className="channelPhoto">
              <img className="photo offlinePhoto" alt="hero" src={cogu} />
            </div>
            <div className="channelTitles">
              <h1>Gaules</h1>
              <span> 3 vídeos novos</span>
            </div>
          </div>
          <div className="sideBarViewNumber">
            <p>Offline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
