import { Link } from "react-router-dom"

export default function BlogList({blogs, title}){


    return(
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* Browser Router Parameter */}
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.id}. {blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}