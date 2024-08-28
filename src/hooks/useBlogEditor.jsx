import { useState, useEffect } from "react";

const useBlogEditor = (initialBlog) => {
  const [title, setTitle] = useState(initialBlog?.title || "");
  const [content, setContent] = useState(initialBlog?.content || "");
  console.log(content);
  const [coverImageUrl, setCoverImageUrl] = useState(
    initialBlog?.coverImageUrl || ""
  );

  useEffect(() => {
    if (initialBlog) {
      setTitle(initialBlog.title);
      setContent(initialBlog.content);
      setCoverImageUrl(initialBlog.coverImageUrl);
    }
  }, [initialBlog]);

  return {
    title,
    setTitle,
    content,
    setContent,
    coverImageUrl,
    setCoverImageUrl,
  };
};

export default useBlogEditor;