import React from "react";
import {
  MoreHoriz,
  Search,
  MoveToInbox,
  ChatBubbleOutline,
  AccountCircle,
  FavoriteBorder,
  FileCopy,
  SportsEsports,
  MusicNote,
} from "@material-ui/icons";
import hero from "../../images/twitch.png";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="leftMenu">
        <img className="hero" alt="hero" src={hero} />
        <div className="hiddenIconsContainer">
          <FavoriteBorder className="hiddenIcons" />
          <FileCopy className="hiddenIcons" />
          <SportsEsports className="hiddenIcons" />
          <MusicNote className="hiddenIcons" />
        </div>
        <p> Seguir </p>
        <p> Procurar </p>
        <p> Esports </p>
        <p> Música </p>
        <p>
          <MoreHoriz />
        </p>
      </div>
      <div className="searchContainer">
        <div className="searchButtonContainer">
          <input className="searchInput" placeholder="Pesquisa" />
          <button className="searchButton">
            <Search className="searchIcon" />
          </button>
        </div>
      </div>
      <div className="rightMenuContainer">
        <div className="rightMenuGroup">
          <Search className="searchIconHidden" />
          <MoveToInbox className="rightMenuIcons" />
          <ChatBubbleOutline className="rightMenuIcons" />
          <button className="rightMenuButton">Comprar Bits</button>
          <AccountCircle className="rightMenuUserIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
