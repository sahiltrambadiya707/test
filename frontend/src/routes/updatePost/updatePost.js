import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import PostForm from "../../components/postForm/PostForm";
import { isEmpty } from "../../helpers/utile";
import { updatePost } from "../../redux/action/post.action";
import _ from "lodash";

const UpdatePost = () => {
  const post = useSelector((state) => state?.post);
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputValue, setInputValue] = useState(location?.state);
  const [fileUpload, setFileUpload] = useState(location?.state?.image);

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

  const handleRemoveMedia = (index) => {
    setFileUpload({});
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      isEmpty(inputValue?.title?.trim()) ||
      isEmpty(inputValue?.description?.trim()) ||
      (isEmpty(fileUpload) && isEmpty(fileUpload.name))
    ) {
      alert("some fields is missing...!");
      return;
    }
    let formData = new FormData();
    formData.append("title", inputValue?.title?.trim());
    formData.append("description", inputValue?.description?.trim());
    formData.append("image", fileUpload);

    dispatch(updatePost(id, formData));
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
        handleUpdate={handleUpdate}
        edit={true}
        loader={post?.loading}
      />
    </>
  );
};

export default UpdatePost;
