import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  CircularProgress,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  cn,
} from "@nextui-org/react";
import { CopyLinkIcon, EditIcon, DeleteIcon, ChevronDown } from "../components";
import { useNavigate } from "react-router-dom";

const BlogList = ({ username }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const navigate = useNavigate();
  // Icon Classes
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  // Fetch Blogs from server by username
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`/api/users/${username}`);
        setTimeout(() => {
          setBlogs(response.data.blogs);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError("Failed to fetch blogs.");
        console.log(error);
      }
    };

    fetchBlogs();
  }, [username]);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <CircularProgress color="secondary" size="md" aria-label="Loading..." />
      </div>
    );
  if (error) return <p>{error}</p>;

  // Open modal to confirm deletion
  const openDeleteModal = (blog) => {
    setBlogToDelete(blog);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setBlogToDelete(null);
  };

  // Handle Blog Delete
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/blogs/${blogToDelete._id}`);
      setBlogs(blogs.filter((blog) => blog._id !== blogToDelete._id));
      closeModal();
      toast.success("Blog deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete blog.");
    }
  };

  // Handle Copy Link
  const handleCopyLink = (blogId) => {
    const blogLink = `${window.location.origin}/blog/${blogId}`;
    navigator.clipboard
      .writeText(blogLink)
      .then(() => {
        toast.success("Blog link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy blog link:", error);
        toast.error("Failed to copy blog link.");
      });
  };

  // Handle Edit Blog
  const handleEditBlog = (blog) => {
    navigate("/createblog", { state: { blog } });
  };

  return (
    <div>
      <h3 className="font-semibold">Published Blogs ({blogs.length}) </h3>
      <ul>
        <div>
          {blogs.map((blog) => (
            <div key={blog._id}>
              <li className="text-blue-500 text-left cursor-pointer">
                {blog.title}
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly variant="default">
                      <ChevronDown fill="currentColor" size={16} />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem
                      key="copy"
                      startContent={<CopyLinkIcon className={iconClasses} />}
                      onClick={() => handleCopyLink(blog._id)}
                    >
                      Copy link
                    </DropdownItem>
                    <DropdownItem
                      key="edit"
                      startContent={<EditIcon className={iconClasses} />}
                      onClick={() => handleEditBlog(blog)}
                    >
                      Edit Blog
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => openDeleteModal(blog)}
                      key="delete"
                      className="text-danger"
                      color="danger"
                      startContent={
                        <DeleteIcon
                          className={cn(iconClasses, "text-danger")}
                        />
                      }
                    >
                      Delete Blog
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </div>
          ))}
        </div>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent>
          <ModalHeader>
            <h2>Confirm Deletion</h2>
          </ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this blog?</p>
          </ModalBody>
          <ModalFooter>
            <Button auto flat color="error" onClick={closeModal}>
              No
            </Button>
            <Button auto onClick={handleDelete}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogList;
