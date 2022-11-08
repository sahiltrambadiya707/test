import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import PostForm from "../../components/postForm/PostForm";
import { isEmpty } from "../../helpers/utile";
import { addPost } from "../../redux/action/post.action";

const CreatePost = () => {
  const [inputValue, setInputValue] = useState({});
  const [fileUpload, setFileUpload] = useState({});
  const dispatch = useDispatch();
  const post = useSelector((state) => state?.post);
  const history = useHistory();

  useEffect(() => {
    return () => {
      setInputValue({});
      setFileUpload({});
    };
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleRemoveMedia = () => {
    setFileUpload({});
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      isEmpty(inputValue?.title?.trim()) ||
      isEmpty(inputValue?.description?.trim()) ||
      isEmpty(fileUpload?.name)
    ) {
      alert("some fields is missing...!");
      return;
    }

    let formData = new FormData();
    formData.append("title", inputValue?.title?.trim());
    formData.append("description", inputValue?.description?.trim());
    formData.append("image", fileUpload);

    dispatch(addPost(formData));
    if (post?.loading === false) {
      history.push("/");
    }
  };

  return (
    <>
      <PostForm
        handleInput={handleInput}
        inputValue={inputValue}
        setFileUpload={setFileUpload}
        fileUpload={fileUpload}
        handleRemoveMedia={handleRemoveMedia}
        handleAdd={handleAdd}
        edit={false}
        loader={post?.loading}
      />
    </>
  );
};

export default CreatePost;
