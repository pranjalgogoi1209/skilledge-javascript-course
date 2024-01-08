import { useState } from "react";

const data = [
  {
    title: "book1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis deleniti laudantium et, architecto sed, commodi iusto doloremque obcaecati corrupti magnam rerum? Recusandae in quia ea nisi, quos aspernatur velit.",
    author: "pranjal gogoi",
    id: 1,
  },

  {
    title: "book2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis deleniti laudantium et, architecto sed, commodi iusto doloremque obcaecati corrupti magnam rerum? Recusandae in quia ea nisi, quos aspernatur velit.",
    author: "krishna yadav",
    id: 2,
  },

  {
    title: "book3",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis deleniti laudantium et, architecto sed, commodi iusto doloremque obcaecati corrupti magnam rerum? Recusandae in quia ea nisi, quos aspernatur velit.",
    author: "rahul singh",
    id: 3,
  },
];

function Home() {
  const [blogs, setBlogs] = useState(data);

  return (
    <div className="home">
      {/* map method return a dynamic list */}
      {blogs.map(blog => (
        // react can't grap individual blog element without the help of key prop, we use it for unique identification
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;
