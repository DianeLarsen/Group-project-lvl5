import React from "react";
import "../CssFiles/NewPost.css";
import axios from "axios"


export default function NewPost(props) {
    const postInitial = {
        lot: "",
        title: "",
        type: "",
        description: "",
        img: "",
        name: ""
      };
const [newPost, setNewPost] = React.useState(postInitial)
console.log(newPost)


function handleChange(event) {
    const { name, value } = event.target;

    setNewPost((prevValue) => ({ ...prevValue, [name]: value }));
    // eslint-disable-next-line
  }

  function handleSubmit(e) {
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
    <div className="new-post-form">
      <div className="title">Complete a new post</div>
      
      <p className="required">* all fields required</p>
      <div className="input-container ic1">
        <input
          id="lotNum"
          className="input"
          type="tel"
          placeholder=" "
          name="lot"
          value={newPost.lot}
          onChange={handleChange}
          min="1" max="32"
          required
        />
        <div className="cut" ></div>
         <label htmlFor="lotNum" className="placeholder">
          * Lot
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="title"
          className="input"
          type="text"
          placeholder=" "
          name="title"
          value={newPost.title}
          onChange={handleChange}
          required
        />
        <div className="cut"></div>
        <label htmlFor="lotNum" className="placeholder">
        * Title
        </label>
      </div>
      <div className="input-container ic3">
        <input
          id="type"
          className="input"
          type="text"
          placeholder=" "
          name="type"
          value={newPost.type}
          onChange={handleChange}
          required
        />
        <div className="cut"></div>
        <label htmlFor="lotNum" className="placeholder">
        * Type
        </label>
      </div>
      <div className="input-container ic4">
        <textarea
          id="description"
          className="input"
          type="text"
          placeholder=" "
          name="description"
          value={newPost.description}
          onChange={handleChange}
          required
        />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">
        * Description
        </label>
      </div>
      <div className="input-container ic5">
        <input
          id="info image_input"
          className="input"
          accept="image/png, image/jpg"
          type="text"
          placeholder=" "
          name="img"
          value={newPost.img}
          onChange={handleChange}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="info" className="placeholder">
          Image (URL only)
        </label>
      </div>
      {newPost.img && <div id="display_image"></div>}
      <div className="input-container ic6">
        <input
          id="info"
          className="input"
          type="text"
          placeholder=" "
          name="name"
          value={newPost.name}
          onChange={handleChange}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="info" className="placeholder">
          Name
        </label>
      </div>
      <button type="text" disabled={false} className="submit" onClick={handleSubmit}>
        Submit
        {/* {!validInput ? "Submit" : "Missing or Incorrect Fields"} */}
      </button>
    </div>
  );
}

