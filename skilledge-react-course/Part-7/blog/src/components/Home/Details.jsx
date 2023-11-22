import React from "react";
import { useParams } from "react-router-dom";
// to grab the id coming from router parameter
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  const navigate = useNavigate();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/blogs/${id}`);
  // console.log(blog.image);

  const handleDelete = () => {
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {});
  };
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {/* fetch take some time to fetch, so if we display the body before fetch then it will throw error, so we said if data is there then display the body */}
      {blog && (
        <article>
          <h1>
            {id} - BOOK NAME : {blog.title}
          </h1>
          <br />
          <img src={blog.image} height={200} />
          <br />
          <h3>WRITTEN BY : {blog.author}</h3>
          <br />
          <p>BOOK DESCRIPTION : {blog.body}</p>
          <br />
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
      {/* {id} */}
    </div>
  );
}
