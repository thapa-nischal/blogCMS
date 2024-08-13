import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Blocks from "editorjs-blocks-react-renderer";
import axios from "axios";
import { CircularProgress } from "@nextui-org/react";
import { format } from "date-fns";

const FullBlogView = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the blog by ID from server
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${id}`);
        setTimeout(() => {
          setBlog(response.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <CircularProgress color="secondary" size="md" aria-label="Loading..." />
      </div>
    );

  // Blog Creation Time
  const formattedDate = format(new Date(blog.createdAt), "MMMM d, yyyy");

  return (
    <div className="container mx-auto p-6 max-w-screen-lg">
      <h1 className="text-6xl text-center leading-tight font-bold mb-4">
        {blog.title}
      </h1>
      <div className="my-6 font-bold flex justify-center">
        <p className="text-slate-600 px-4">
          By: <Link to={`/user/${blog.author}`}>{blog.author}</Link>
        </p>
        <p className="text-slate-600 px-4">{formattedDate}</p>
      </div>
      <div className="text-xl leading-relaxed text-justify">
        <Blocks data={blog.content} />
      </div>
    </div>
  );
};

export default FullBlogView;
