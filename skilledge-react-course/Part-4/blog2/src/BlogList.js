function BlogList({blogs, title, handleDelete}){
    // console.log(props);
    // const blogs = props.blogs;
    // const title = props.title;
    // const {blogs, title} = props;
    
    // you are not allowed to modify props, it will not delte the actual data, so it will increase space complexity
    /* const handleDelete = (id) => {
        console.log(id);
    }
     */

    
    return(
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.id}. {blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => {handleDelete(blog.id)}}>Delete</button>
                </div>
            ))}
        </div>
    );
}
export default BlogList;