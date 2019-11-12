import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./PlaylistCard.scss";

const PlaylistCard = ({ playlist }) => {
  return (
    <Link
      to={`${playlist.id}/${playlist.name}/tracks`}
      className="playlist-card"
    >
      <figure
        className="playlist-card__img"
        style={{ backgroundImage: `url(${playlist.images[0].url})` }}
      ></figure>
    </Link>
  );
};

export default PlaylistCard;
