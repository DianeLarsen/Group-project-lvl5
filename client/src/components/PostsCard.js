import EditPost from "./EditPost";
import React, { useState } from "react";
import "../CssFiles/PostCard.css";
var Timestamp = require("react-timestamp");

export default function LotsCard(props) {
  const [editToggle, setEditToggle] = useState(false);
  const { posts, id, editPosts } = props;
  let tagColor
if(posts.type === "Help Wanted"){
  tagColor = "tag tag-blue"
} else if(posts.type === "Willing to work"){
  tagColor = "tag tag-brown"
}else if(posts.type === "Event"){
  tagColor = "tag tag-green"
}else if(posts.type === "Missing"){
  tagColor = "tag tag-pink"
}else if(posts.type === "Alert"){
  tagColor = "tag tag-red"
}


  return (
    <div className="postCard-container">
      {!editToggle ? (
        <>
          <div className="postcard">
            <div className="postcard__header">
              <span className={tagColor} >{posts.type}</span>
              <div>
                <button
                  className="btn"
                  onClick={() => props.deletePost(id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
                <button
                  className="btn"
                  onClick={() => {
                  
                      
                      setEditToggle((prevToggle) => !prevToggle)
                    
                  }}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </div>
            </div>
            <div className="postcard__body">
              <h4>{posts.title}</h4>
              <p>{posts.description}</p>
              {posts.img !== "" && posts.img !== undefined && (
                <img
                  src={posts.img}
                  alt="postcard__image"
                  className="postcard__image"
                  width="600"
                />
              )}
            </div>
            <div className="postcard__footer">
              <div className="postcard__user">
                {/* <img
                src="https://i.pravatar.cc/40?img=1"
                alt="user__image"
                className="postcard__image"
              /> */}
                <div className="postcard__info">
                  <h5>{posts.name} </h5>
                  <small>
                    <Timestamp relative date={posts.timestamp} />
                    {posts.edited && <p>edited</p>}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <EditPost
          posts={posts}
          setEditToggle={setEditToggle}
          editPosts={editPosts}
          id={id}
        />
      )}
    </div>
  );
}
