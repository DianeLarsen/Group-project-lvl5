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

  return (
    <div className="posts">
      <NewPost getPost={getPost}/>
      {posts.map(showposts => <PostsCard key={showposts._id}posts={showposts} />)}
      <div className="spacer-div"></div>
    </div>
  );
}
