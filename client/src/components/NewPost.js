import React, { useState, useEffect } from "react";
import "../CssFiles/NewPost.css";

export default function NewPost(props) {
  const { newPost, setNewPost, handleSubmit } = props;

  const [validInput, setValidInput] = useState(true);
  const [checkLot, setCheckLot] = useState(true);
  console.log(validInput);
  console.log(newPost);
  console.log(!checkLot);

  function handleLotCheck(num) {
    if (isNaN(num)) {
      setCheckLot(true);
    } else {
      setCheckLot(false);
    }
  }
  useEffect(() => {
    setCheckLot(false);
    handleLotCheck(newPost.lot);

    // eslint-disable-next-line
  }, [newPost.lot]);
  useEffect(() => {
    if (
      newPost.lot > 0 &&
      newPost.lot < 33 &&
      !checkLot &&
      newPost.title !== "" &&
      newPost.type !== "" &&
      newPost.description !== ""
    ) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }

    // eslint-disable-next-line
  }, [newPost]);
  function handleChange(event) {
    const { name, value } = event.target;

    setNewPost((prevValue) => ({ ...prevValue, [name]: value }));
    // eslint-disable-next-line
  }

  return (
    <div className="new-post-form">
      <div className="title">Complete a new post</div>

      <p className="required">* all fields required</p>
      <div className="input-container ic1">
        <input
          id="lotNum"
          title="Only numbers allowed"
          className="input"
          type="tel"
          placeholder=" "
          name="lot"
          value={newPost.lot}
          onChange={handleChange}
          pattern="\d*"
          min="1"
          max="32"
          required
        />
        <div
          className="cut"
          style={checkLot ? { width: "100px" } : { width: "85px" }}
        ></div>
        {checkLot ? (
          <label
            htmlFor="lotNum"
            className="placeholder"
            style={checkLot && { color: "red" }}
          >
            use a valid lot #
          </label>
        ) : (
          <label htmlFor="lotNum" className="placeholder">
            Lot #
          </label>
        )}
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
        <select
          onChange={handleChange}
          name="type"
          className="filter-form input"
          value={newPost.type}
        >
          <option>* Type</option>
          <option value="Help Wanted">Help Wanted</option>
          <option value="Willing to Work">Willing to work</option>
          <option value="Event">Event</option>
          <option value="Missing">Missing</option>
          <option value="Alert">Alert</option>
        </select>
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
          type="url"
          placeholder=" "
          pattern="https://.*"
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
      <button
        type="text"
        disabled={validInput}
        className="submit"
        onClick={handleSubmit}
      >
        {!validInput ? "Submit" : "Missing or Incorrect Fields"}
      </button>
    </div>
  );
}
