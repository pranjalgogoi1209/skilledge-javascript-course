import React from 'react'
import useFetch from '../../hooks/useFetch'
import BlogList from '../BlogList/BlogList'


export default function Home() {
    // alias name, one type of rename of data to blogs
    const {data:blogs, isPending, error} = useFetch('http://localhost:3000/blogs')
    // console.log(blogs)
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title = "All Blog !" />}
        </div>
    )
}