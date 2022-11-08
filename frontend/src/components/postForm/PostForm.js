import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Dropzone from "../dropzone/dropzone";
import { ThreeCircles } from "react-loader-spinner";

const PostForm = (props) => {
  const {
    handleInput,
    inputValue,
    fileUpload,
    setFileUpload,
    handleRemoveMedia,
    handleAdd,
    edit,
    loader,
    handleUpdate,
  } = props;

  return (
    <div className="container">
      {loader ? (
        <ThreeCircles color="#334D52" height={30} width={30} />
      ) : (
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="title"
              onChange={handleInput}
              value={inputValue?.title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <FloatingLabel controlId="Description" label="Description">
              <Form.Control
                name="description"
                as="textarea"
                placeholder="Description"
                style={{ height: "100px" }}
                onChange={handleInput}
                value={inputValue?.description}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Dropzone
              fileUpload={fileUpload}
              setFileUpload={setFileUpload}
              uploadMultiple={false}
              handleRemoveMedia={handleRemoveMedia}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={edit ? handleUpdate : handleAdd}>
            {edit ? "Update" : "Add"}
          </Button>
        </Form>
      )}
    </div>
  );
};

export default PostForm;
