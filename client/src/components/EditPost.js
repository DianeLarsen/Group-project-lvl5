import React from "react";
import "../CssFiles/NewPost.css";

var Timestamp = require("react-timestamp");

export default function EditPost(props) {
  const { posts, setEditToggle, editPosts, id } = props;
  const postInitial = {
    lot: posts.lot || "",
    title: posts.title || "",
    type: posts.type || "",
    description: posts.description || "",
    img: posts.img || "",
    name: posts.name || "",
    edited: false
  };

  const [newPost, setNewPost] = React.useState(postInitial);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewPost((prevValue) => ({ ...prevValue, [name]: value, edited: true }));
    // eslint-disable-next-line
  }

  return (
    <div className="edit-post">
      <div className="postcard">
        <div className="postcard__header"></div>
        <div className="postcard__body">
          <label htmlFor="type">Type</label>
          <select
            onChange={handleChange}
            name="type"
            value={newPost.type}
            className="filter-form"
          >
            <option>* Type</option>
            <option value="Help Wanted">Help Wanted</option>
            <option value="Willing to work">Willing to work</option>
            <option value="Event">Event</option>
            <option value="Missing">Missing</option>
            <option value="Alert">Alert</option>
          </select>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            value={newPost.title}
          />
          <label htmlFor="desc">Description</label>
          <input
            onChange={handleChange}
            type="text"
            id="desc"
            name="description"
            value={newPost.description}
          />
          <label htmlFor="image">Image (url only)</label>
          <input
            onChange={handleChange}
            type="text"
            id="image"
            name="img"
            value={newPost.img}
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
              <small>
                <Timestamp relative date={posts.timestamp} />
                {posts.edited && <p>edited</p>}
              </small>
            </div>
          </div>
        </div>
        <button
          className="save-btn"
          onClick={() => {
            editPosts(newPost, id);
            console.log(newPost, id);
            setEditToggle((prevToggle) => !prevToggle);
                    }}
        >
          <i className="fa-solid fa-check"></i>
        </button>
        <button
          className="cancel-btn"
          onClick={() => setEditToggle((prevToggle) => !prevToggle)}
        >
           <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
