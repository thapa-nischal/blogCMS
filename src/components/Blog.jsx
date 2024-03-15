import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Blog() {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <ReactQuill
          theme="snow"
          placeholder="Write your content here...."
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}

export default Blog;