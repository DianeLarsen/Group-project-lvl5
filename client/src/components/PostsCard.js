import React, { useState } from "react";
var Timestamp = require("react-timestamp")
export default function LotsCard(props) {
const [posts, setPosts] = useState(props.posts)

  return (
    <div className="postCard-container">
      <h1>UNDER CONSTRUCTION - Please excuse our mess</h1>
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
            <span className="tag tag-blue">{posts.type}</span>
            <h4>{posts.title}</h4>
            <p>
            {posts.description}
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
                <h5>{posts.name}</h5>
                <small><Timestamp relative date={posts.timestamp} /></small>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
