import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [body, setBody] = useState();
  const [image, setImage] = useState();
  const Navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // defining object
    const blog = { title, author, body, image };

    // post request to json server
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
      // converting the javascript blog to json
    }).then(() => {
      console.log("New Blog Created !!");
      Navigate("/");
    });
  };

  return (
    <div>
      <h2>Add a new Blog</h2>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <div>
          <label>
            Blog Title :
            <input
              type="text"
              required
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
            {/* required means must be write something before submit */}
          </label>
        </div>

        <div>
          <label>
            Blog Author :
            <select name="" id="" onChange={e => setAuthor(e.target.value)}>
              <option value="pranjal gogoi">PRANJAL GOGOI</option>
              <option value="krishna yadav">KRISHNA YADAV</option>
              <option value="rahul singh">RAHUL SINGH</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Blog Body :
            <textarea
              required
              onChange={e => {
                setBody(e.target.value);
              }}
            ></textarea>
          </label>
        </div>

        <div>
          <label>
            Blog Image :
            <input
              type="text"
              required
              onChange={e => {
                setImage(e.target.value);
              }}
            />
            {/* required means must be write something before submit */}
          </label>
        </div>

        <div>
          <button>Add Blog</button>
        </div>
      </form>
    </div>
  );
}
