import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link to={"/"}>Home</Link>
                {/* <a href="/about-us">About Us</a> */}
                <Link to={"/about-us"}>About Us</Link>
                {/* <a href="/create-blog" style={{
                    color : 'white',
                    backgroundColor : '#f1356d',
                    borderRadius : '8px'
                }}>New blog</a> */}
                <Link to={"/create-blog"} style={{
                    color : 'white',
                    backgroundColor : '#f1356d',
                    borderRadius : '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}