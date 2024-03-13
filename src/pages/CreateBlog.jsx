import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    title: "",
    body: "",
  });
  const { title, body } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/newblogs",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      // If the blog is successfully created, you can redirect the user to another page
      console.log("Blog published:", data);

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
        // console.log();
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
    }

    setInputValue({
      ...inputValue,
      title: "",
      body: "",
    });
  };

  return (
    <div>
      <h1>Create a New Blog</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleOnChange}
          placeholder="Enter your blog's title..."
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={handleOnChange}
          placeholder="Write your blog post..."
        />
      </div>
      <button onClick={handlePublish}>Publish</button>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;
