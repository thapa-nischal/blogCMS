import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { formatDistanceToNow, format, differenceInDays } from "date-fns";

const Blogs = ({ blog }) => {
  // Content Preview
  const getContentPreview = (content) => {
    const text = content.blocks.map((block) => block.data.text || "").join(" ");
    return text.length > 250 ? text.slice(0, 250) + "..." : text;
  };

  const previewContent = { __html: getContentPreview(blog.content) };

  // Blog Creation Date
  const blogDate = new Date(blog.createdAt);
  const daysDifference = differenceInDays(new Date(), blogDate);
  const formattedDate =
    daysDifference > 7
      ? format(blogDate, "MMM d, yyyy")
      : formatDistanceToNow(blogDate, { addSuffix: true });

  const displayedTags = blog.tags.slice(0, 3);

  return (
    <Card
      shadow="none"
      radius="md"
      className=" mb-4 p-7 bg-transparent border-default border-2"
    >
      <Link to={`/blog/${blog._id}`}>
        <CardHeader className="text-3xl font-bold">{blog.title}</CardHeader>
        <CardBody
          className="text-lg text-justify text-slate-500"
          dangerouslySetInnerHTML={previewContent}
        ></CardBody>
      </Link>

      <CardFooter className="justify-between">
        <strong className="text-slate-700">
          By: <Link to={`/user/${blog.author}`}>{blog.author}</Link>
        </strong>
        <p className="text-slate-400">{formattedDate}</p>
      </CardFooter>
      <CardFooter>
        {displayedTags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
            {index < displayedTags.length - 1 && ", "}
          </span>
        ))}
        {blog.tags.length > 3 && <span>... {blog.tags.length - 3} more</span>}
      </CardFooter>
    </Card>
  );
};

export default Blogs;