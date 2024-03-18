import React, { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs"); // Replace with your API endpoint
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <h1>List of Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>
            <strong>Author:</strong> {blog.author}
          </p>
          <p>{blog.body}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blogs;