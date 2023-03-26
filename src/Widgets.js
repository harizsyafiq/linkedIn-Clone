import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("harizComing", "Top News - 9999 readers")}
      {newsArticle("Coronavirus - Malaysia Update", "Top News - 15692 readers")}
      {newsArticle("Football - manchester loser", "Football - 700 readers")}
      {newsArticle("Is redux too good ?", "Code - 1234 readers")}
      {newsArticle("Hariz just cloning LinkedIn", "Top News - 7777 readers")}
    </div>
  );
}

export default Widgets;
