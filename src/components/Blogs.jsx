import React, { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getblog");
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
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