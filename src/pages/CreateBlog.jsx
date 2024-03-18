import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const [inputValue, setInputValue] = useState({
    title: "",
    body: "",
    content: "",
  });

  const { title, body, content } = inputValue;
  const handleOnChange = (value) => {
    setInputValue({
      ...inputValue,
      content: value,
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
          navigate("/blogs");
        }, 2000);
      } else {
        handleError(message);
        console.log();
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
    }

    setInputValue({
      ...inputValue,
      title: "",
      body: "",
      content: "",
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
          onChange={(e) =>
            setInputValue({ ...inputValue, title: e.target.value })
          }
          placeholder="Enter your blog's title..."
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) =>
            setInputValue({ ...inputValue, body: e.target.value })
          }
          placeholder="Write your blog post..."
        />
      </div>
      <div>
        <ReactQuill
          name="content"
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="Write your content here...."
          value={content}
          onChange={handleOnChange}
        />
      </div>
      <button onClick={handlePublish}>Publish</button>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;