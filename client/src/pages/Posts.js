import PostsCard from "../components/PostsCard.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewPost from "../components/NewPost.js";
import "../CssFiles/PostCard.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const postInitial = {
    lot: "",
    title: "",
    type: "",
    description: "",
    img: "",
    name: "",
  };
  const [newPost, setNewPost] = React.useState(postInitial);
  //console.log(posts)
  function getPost() {
    axios
      .get("/posts")
      .then((res) => {
        const newCard = res.data;

        setPosts(newCard);
      })
      .catch((error) => console.log(error.response.data.errMsg));
  }
  useEffect(() => {
    getPost();
  }, []);
  function deletePost(postID) {
    axios
      .delete(`/posts/${postID}`)
      .then((res) => getPost(res))
      .catch((error) => console.log(error));
  }

  function handleFilter(e) {
    if (e.target.value === "reset") {
      getPost();
    } else {
      axios
        .get(`/posts/search/type?type=${e.target.value}`)
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const addPosts = {
      lot: newPost.lot,
      title: newPost.title,
      type: newPost.type,
      description: newPost.description,
      img: newPost.img || "",
      name: newPost.lastName || "",
    };

    console.log(newPost);
    axios
      .post("/posts", addPosts)
      .then((res) => {
        getPost(res);
      })
      .catch((err) => console.log(err));

    setNewPost(postInitial);
  }
  function editPosts(updates, postID) {
    
    axios
      .put(`/posts/${postID}`, updates)
      .then((res) =>
        setPosts((prevdata) =>
          prevdata.map((post) => (post._id !== postID ? post : res.data))
        )
      )
      .catch((error) => console.log(error));
  }
  return (
    <div className="posts">
      <div className="new-postcard">
        <NewPost
          getPost={getPost}
          newPost={newPost}
          setNewPost={setNewPost}
          handleSubmit={handleSubmit}
        />
        <div className="filter-posts">
          <select onChange={handleFilter} className="filter-form">
            <option value="reset">All Posts</option>
            <option value="Help Wanted">Help Wanted</option>
            <option value="Willing to work">Willing to work</option>
            <option value="Event">Event</option>
            <option value="Missing">Missing</option>
            <option value="Alert">Alert</option>
          </select>
          <div className="post-wrapper">
            {posts.map((showposts) => (
              <PostsCard
                newPost={newPost}
                setNewPost={setNewPost}
                deletePost={deletePost}
                key={showposts._id}
                posts={showposts}
                id={showposts._id}
                handleSubmit={handleSubmit}
                editPosts={editPosts}
              />
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}
