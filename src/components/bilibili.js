import React from "react";
import "../css/youtube.css"

const BilibiliEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`//player.bilibili.com/player.html?bvid=${embedId}&page=1`}
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="Embedded bilibili"
    />
  </div>
);

export default BilibiliEmbed;