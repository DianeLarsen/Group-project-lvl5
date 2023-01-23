import React, { useState } from "react";
var Timestamp = require("react-timestamp")
export default function LotsCard(props) {
  const intialPost = {
    title: "",
    img: "https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
    type: "General",
    lot: null,
    description: "",
    timestamp: Date(),
    user: ""
  };
  const [cardPosts, setCardPosts] = useState(intialPost);

  return (
    <div className="postCard-container">
      <div className="card">
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="card__image"
              className="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">{cardPosts.type}</span>
            <h4>{cardPosts.title}</h4>
            <p>
            {cardPosts.description}
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>{cardPosts.user}</h5>
                <small><Timestamp relative date={cardPosts.timestamp} /></small>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
