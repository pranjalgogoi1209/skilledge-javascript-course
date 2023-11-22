import { useState } from "react";
import BlogList from "./BlogList";

function Home(){
    const [blogs, setBlog] = useState([
        {title : 'book1', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis deleniti laudantium et, architecto sed, commodi iusto doloremque obcaecati corrupti magnam rerum? Recusandae in quia ea nisi, quos aspernatur velit.', author : 'pranjal gogoi', id : 1},

        {title : 'book2', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis deleniti laudantium et, architecto sed, commodi iusto doloremque obcaecati corrupti magnam rerum? Recusandae in quia ea nisi, quos aspernatur velit.', author : 'krishna yadav', id : 2},

        {title : 'book3', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis deleniti laudantium et, architecto sed, commodi iusto doloremque obcaecati corrupti magnam rerum? Recusandae in quia ea nisi, quos aspernatur velit.', author : 'pranjal gogoi', id : 3},
        {title : 'book4', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis deleniti laudantium et, architecto sed', author : 'rahul singh', id : 4}
    ]);

    const handleDelete = (id) => {
        const newData = blogs.filter((blog) => blog.id !== id);
        setBlog(newData);
    }

    return(
        <div className="home">
            {/* use props to transfer data from parent to child component */}
            <BlogList blogs={blogs} title="All Blog !" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(blog => blog.author==='pranjal gogoi')} title="Pranjal's Blog" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(blog => blog.author==='krishna yadav')} title="Krishna's Blog" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(blog => blog.author==='rahul singh')} title="Rahul's Blog" handleDelete={handleDelete}/>
        </div>
    );
}
export default Home;