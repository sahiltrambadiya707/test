import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { generatePublicUrl } from "../../helpers/axios";
import { getPostDetailsById } from "../../redux/action/post.action";
import Card from "react-bootstrap/Card";

const ViewPost = () => {
  const post = useSelector((state) => state?.post);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetailsById(id));
  }, []);

  return (
    <div className="container">
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={generatePublicUrl(post?.postDetails?.image)}
          alt={post?.postDetails?.image}
        />
        <Card.Body>
          <Card.Title>{post?.postDetails?.title}</Card.Title>
          <Card.Text>{post?.postDetails?.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewPost;
