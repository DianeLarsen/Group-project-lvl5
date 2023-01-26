
import React from "react";
import "../CssFiles/NewPost.css";
import axios from "axios"


export default function EditPost(props) {
    const postInitial = {
        lot: "",
        title: "",
        type: "",
        description: "",
        img: "",
        name: ""
      };
const [newPost, setNewPost] = React.useState(postInitial)


function handleChange(event) {
    const { name, value } = event.target;
    setNewPost((prevValue) => ({ ...prevValue, [name]: value }));
    // eslint-disable-next-line
  }

  function handleEdit(e) {
    e.preventDefault();

    const addPosts = {
      lot: newPost.lot,
      title: newPost.title,
      type: newPost.type,
      description: newPost.description,
      img: newPost.img || "",
      name: newPost.lastName || ""
    };

    console.log(newPost);
    axios
      .post("/posts", addPosts)
      .then((res) => {
        props.getPost(res);
      })
      .catch((err) => console.log(err));

      setNewPost(postInitial);
  }

  return (
    <div className="edit-post">
      
      <button type="text" disabled={false} className="edit" onClick={handleEdit}>
        Submit
        {/* {!validInput ? "Submit" : "Missing or Incorrect Fields"} */}
      </button>
    </div>
  );
}
