import React, { useState } from "react";
import "../CssFiles/PostCard.css"
var Timestamp = require("react-timestamp")

export default function LotsCard(props) {
const [posts, setPosts] = useState(props.posts)
const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="postCard-container">
 
 {!editToggle ? (
        <>
          <div className="postcard">
          <div className="postcard__header">
           
          </div>
          <div className="postcard__body">
            <span className="tag tag-blue">{posts.type}</span>
            <h4>{posts.title}</h4>
            <p>
            {posts.description}
            </p>
           { posts.img !== "" && <img
              src={posts.img}
              alt="postcard__image"
              className="postcard__image"
              width="600"
            />}
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
          <button
            className="delete-btn"
            onClick={() => props.deletePost(props.id)}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Edit
          </button>
        </div>
         
        </>
      ) : ( <div className="postcard">
      <div className="postcard__header">
       
      </div>
      <div className="postcard__body">
      <label htmlFor="type">Type</label>
        <input type="text" id="type" name="type" value={posts.type} />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={posts.title} />
        <label htmlFor="desc">Description</label>
        <input type="text" id="desc" name="description" value={posts.description} />
        <label htmlFor="image">Image (url only)</label>
        <input type="text" id="image"name="img" value={posts.img} />
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
      <button
        className="edit-btn"
        onClick={() => setEditToggle((prevToggle) => !prevToggle)}
      >
        Cancel
      </button>
      </div>)}
    </div>
  );
}
