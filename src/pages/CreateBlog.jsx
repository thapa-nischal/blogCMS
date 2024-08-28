import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  ModalContent,
} from "@nextui-org/react";
import { Editor, ChevronLeft, CodexLogo, BlogList } from "../components";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateBlog = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const blogToEdit = state?.blog;
  const [data, setData] = useState(blogToEdit ? blogToEdit.content : null);
  const [title, setTitle] = useState(blogToEdit ? blogToEdit.title : "");
  const [coverImageUrl, setCoverImageUrl] = useState(
    blogToEdit ? blogToEdit.coverImageUrl : ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageInfo, setCoverImageInfo] = useState("");
  const [tags, setTags] = useState([]);
  const [isModalVisiblee, setIsModalVisiblee] = useState(false);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  const handlePublish = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const endpoint = blogToEdit
        ? `/api/blogs/${blogToEdit._id}`
        : "/api/postblog";
      const method = blogToEdit ? "patch" : "post";
      const response = await axios[method](
        endpoint,
        {
          title,
          data,
          tags,
        },
        {
          withCredentials: true,
        }
      );
      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
        goToHomePage();
      } else {
        handleError();
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      handleError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSuccess = (msg) =>
    toast.success(msg, {
      autoClose: 2000,
      theme: "dark",
    });

  const handleError = (err) =>
    toast.error(err, {
      autoClose: 2000,
      theme: "dark",
    });

  const goToHomePage = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  // Modal open handler
  const openModal = () => {
    setIsModalVisiblee(true);
  };
  // Modal close handler
  const closeModal = () => {
    setIsModalVisiblee(false);
  };

  // Handle adding a new tag
  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
      closeModal();
    }
  };

  // Handle cover image upload
  const handleCoverImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { success, message, file: coverImage } = response.data;

      if (success) {
        setCoverImage(URL.createObjectURL(file));
        setCoverImageInfo(coverImage.filename);
        setCoverImageUrl(`/api/image/${coverImage.filename}`);
        handleSuccess(message);
      }
    } catch (error) {
      console.error("Error uploading cover image:", error);
      handleError("Failed to upload cover image");
    }
  };

  // Handle deleting cover image
  const deleteCover = async (filename) => {
    try {
      const response = await axios.delete(`/api/files/${filename}`);
      if (response.data.success) {
        setCoverImage(null);
      } else {
        console.error("File deletion failed:", response.data.message);
      }
    } catch (error) {
      console.log(error);
      handleError();
    }
  };

  return (
    <>
      <div className="container m-0 max-w-full 2xl:mx-auto 2xl:max-w-screen-2xl flex">
        <Toaster position="bottom-center" reverseOrder={false} />
        <div className="sidebar sticky top-0 flex flex-col justify-between w-4/12 px-4 py-8 bg-gray-100 h-screen ">
          <div className="text-center">
            <Button
              className="w-full"
              variant="faded"
              radius="md"
              startContent={<CodexLogo fill="currentColor" size={30} />}
            >
              <span className="text-base">{`${username}'s Blogs`}</span>
            </Button>
            <div className="mt-3">
              {username && <BlogList username={username} />}
            </div>
          </div>
          <div className="text-center">
            <Button
              className="w-full "
              onClick={goToHomePage}
              variant="faded"
              startContent={<ChevronLeft fill="currentColor" size={30} />}
              radius="md"
              disabled={isLoading}
            >
              <span className="text-base">
                {isLoading ? "Going Back..." : "Back to CodeX"}
              </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col main-context w-screen bg-white p-8">
          <div className="mb-8">
            <div className="w-full flex justify-end">
              <div>
                <Button
                  onClick={handlePublish}
                  radius="full"
                  color="secondary"
                  variant="solid"
                  disabled={isLoading}
                >
                  {blogToEdit ? "Update" : "Publish"}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex">
              <div>
                <label
                  className="text-xl text-gray-500 hover:text-secondary"
                  htmlFor="cover-image-upload"
                >
                  Add Cover
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageUpload}
                    className="hidden"
                    id="cover-image-upload"
                  />
                </label>
              </div>
              <div className="mx-2">
                <Button
                  className="bg-transparent"
                  radius="full"
                  color="default"
                  variant="solid"
                  disabled={isLoading}
                  onClick={openModal}
                  size="sm"
                >
                  <span className=" text-lgw text-gray-500 hover:text-secondary">
                    Add Tag
                  </span>
                </Button>
              </div>
            </div>
            {coverImage && (
              <div className="mt-4">
                <img src={coverImage} alt="Cover" className="" />
                <button onClick={() => deleteCover(coverImageInfo)}>
                  Delete
                </button>
              </div>
            )}
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Article Title..."
              className="text-3xl font-bold border-none outline-none bg-transparent text-gray-700 w-full placeholder-gray-500 mb-4"
            />
            <div className="editor w-full">
              <Editor
                data={data}
                onChange={setData}
                editorblock="editorjs-container"
              />
            </div>
            {/* Render added tags */}
            {tags.length > 0 && (
              <div className="tags mt-4">
                {tags.map((tag, index) => (
                  <span key={index} className="tag p-2">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for adding tags */}
      <Modal isOpen={isModalVisiblee} onClose={closeModal}>
        <ModalContent>
          <ModalHeader>Add a New Tag</ModalHeader>
          <ModalBody>
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Enter tag"
              clearable
            />
          </ModalBody>
          <ModalFooter>
            <Button auto flat color="error" onClick={closeModal}>
              Cancel
            </Button>
            <Button auto onClick={handleAddTag}>
              Add Tag
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateBlog;
