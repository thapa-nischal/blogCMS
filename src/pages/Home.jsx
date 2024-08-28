import { useEffect, useState } from "react";
import axios from "axios";
import { Blogs } from "../components";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../components";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [tag, setTag] = useState("");
  // Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/getblogs", {
          params: { tag },
        });
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [tag]);

  // Handle input change
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <>
      <div className=" container w-full mx-auto m-4 flex justify-center">
        <Input
          classNames={{
            base: "w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search by Tag..."
          size="lg"
          startContent={<SearchIcon size={18} />}
          type="text"
          variant="bordered"
          value={tag}
          onChange={handleTagChange}
        />
      </div>
      <div className="container mt-8 mx-auto max-w-screen-lg">
        {blogs && blogs.map((blog) => <Blogs key={blog._id} blog={blog} />)}
      </div>
    </>
  );
};

export default Home;