import React from "react";
// import img from "../../assets/img.jpg";

const Item = ({ author, title, disc, date, url, img }) => {
  return (
    <a href={url} target="_blank" className="item">
      <div className="img">
        <img src={img} alt="image" />
      </div>
      <p className="text">{author ? author.slice(0, 15) : "Removed"}</p>
      <h5>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h5>
      {disc ? (
        <p className="dis">
          {disc.length > 30 ? `${disc.slice(0, 30)}...` : disc}
        </p>
      ) : (
        <p className="dis">No description</p>
      )}
      <p className="date">{date}</p>
    </a>
  );
};

export default Item;
