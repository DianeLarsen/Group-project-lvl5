import React, { useState } from "react";
import "../CssFiles/PostCard.css"
var Timestamp = require("react-timestamp")

export default function LotsCard(props) {
const [posts, setPosts] = useState(props.posts)

  return (
    <div className="postCard-container">
 
      <div className="postcard">
          <div className="postcard__header">
           
          </div>
          <div className="postcard__body">
            <span className="tag tag-blue">{posts.type}</span>
            <h4>{posts.title}</h4>
            <p>
            {posts.description}
            </p>
            <img
              src={posts.img}
              alt="postcard__image"
              className="postcard__image"
              width="600"
            />
          </div>
          <div className="postcard__footer">
            <div className="postcard__user">
              {/* <img
                src="https://i.pravatar.cc/40?img=1"
                alt="user__image"
                className="postcard__image"
              /> */}
              <div className="postcard__info">
                <h5>{posts.name}</h5>
                <small><Timestamp relative date={posts.timestamp} /></small>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
