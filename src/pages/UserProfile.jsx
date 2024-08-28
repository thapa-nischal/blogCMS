import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CircularProgress,
  Avatar,
} from "@nextui-org/react";
import { format } from "date-fns";
import { CalenderIcon } from "../components";

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/users/${username}`);
        setTimeout(() => {
          setUser(response.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [username]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <CircularProgress color="secondary" size="md" aria-label="Loading..." />
      </div>
    );

  //   Blog Creation Time
  const formattedDate = format(new Date(user.joinedDate), "MMMM, yyyy");

  return (
    <Card
      shadow="none"
      radius="md"
      className="container mb-4 mt-8 mx-auto p-7 bg-transparent border-default border-2 max-w-screen-lg"
    >
      <div className="user-profile px-8">
        <div className="pb-3 flex flex-col align-center">
          <div className="w-full flex justify-center">
            <Avatar className="w-40 h-40 text-large text-center" />
          </div>
          <h1 className="p-2 text-4xl text-center font-bold">
            {user.username}
          </h1>
        </div>
        <div className="mb-6 px-2.5 py-6 border-default border-2 rounded-md flex flex-row justify-center">
          <div>
            <CalenderIcon fill="" size={30} />
          </div>
          <div className="pl-2 text-center">Member Since {formattedDate}</div>
        </div>
        <div className="mb-6 px-2.5 py-6 text-center border-default border-2 rounded-md justify-center">
          <h2 className="mb-2 text-2xl mt-4">
            Published Blogs ({user.blogs.length})
          </h2>
          <ul>
            {user.blogs.map((blog) => (
              <li key={blog._id} className="text-lg">
                <a
                  href={`/blog/${blog._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {blog.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
