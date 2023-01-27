import PostsCard from "../components/PostsCard.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewPost from "../components/NewPost.js";


export default function Posts() {
  const [posts, setPosts] = useState([])
  console.log(posts)
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

  function handleFilter(e){
    if(e.target.value === "reset"){
      getPost()
    } else {
    axios.get(`/posts/search/type?type=${e.target.value}`)
    .then(res => setPosts(res.data))
    .catch(err => console.log(err))
    }
  }
  return (
    <div className="posts">
      
      <NewPost getPost={getPost}/>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Posts</option>
        <option value="help Wanted">Help Wanted</option>
        <option value="willing to work">Willing to work</option>
        <option value="event">Event</option>
        <option value="missing">Missing</option>
      </select>
      {posts.map(showposts => <PostsCard  deletePost={deletePost} key={showposts._id}posts={showposts} id={showposts._id}/>)}
      <div className="spacer-div"></div>
    </div>
  );
}
