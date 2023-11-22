import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home(){
    const [blogs, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /* const handleDelete = (id) => {
        const newData = blogs.filter((blog) => blog.id !== id);
        setBlog(newData);
    } */

    // npx json-server --watch data/db.json --port 8000  = to start json servers


    // const [name, setName] = useState('Krishna');
    // It will rerender whenever click the change name button, but it will not effect , useEffect hook, bcz that has dependecy


    // At the time of initial render and rerender, useEffect automatically executed, It is also a hook
    // We use it to connect with API s
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs').then(res => {
                console.log(res);
                // only show in end point api error
                if(!res.ok){
                    throw Error('custom error : Can\'t fetch data');
                }
                return res.json()})
            .then(data => {
                setBlog(data);
                setIsPending(false);
                setError(null);
            }) 
            .catch(err => {
                setError(err.message);
                setIsPending(false);
                setBlog(null);
            }); 
        }, 2000);
    }, []);
    // the 2nd argument is array dependency, we can control now when we want re render
    // blank array will give only initial render

    return(
        <div className="home">
            {/* conditional templating */}
            {isPending && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {blogs && <BlogList blogs={blogs} title="All Blog !"/>}
            {/* {blogs && <BlogList blogs={blogs} title="All Blog !" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter(blog => blog.author==='pranjal gogoi')} title="Pranjal's Blog" handleDelete={handleDelete}/>} */}
            {/* <BlogList blogs={blogs.filter(blog => blog.author==='krishna yadav')} title="Krishna's Blog" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(blog => blog.author==='rahul singh')} title="Rahul's Blog" handleDelete={handleDelete}/> */}

            {/* <button onClick={() => {setName('Pranjal')}}>Change Name</button>
            <p>{name}</p> */}
        </div>
    );
}
export default Home;