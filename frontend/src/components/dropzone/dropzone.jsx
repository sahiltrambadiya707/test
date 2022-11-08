import React from "react";
import { generatePublicUrl } from "../../helpers/axios";
import { isEmpty } from "../../helpers/utile";
import "./dropzone.css";

const Dropzone = (props) => {
  const { fileUpload, setFileUpload, uploadMultiple, handleRemoveMedia } = props;

  const OnChangeHandler = (e) => {
    e.preventDefault();
    const { files } = e.target;
    setFileUpload(files[0]);
  };

  return (
    <div className="uploader-container">
      <div className="uploader-alignment">
        <div className="input-btn-text-wrapper">
          <input
            onChange={(e) => OnChangeHandler(e)}
            id="file-upload"
            name="file-upload"
            type="file"
            className="custom-file-input"
            multiple={uploadMultiple}
            onClick={(event) => {
              event.target.value = null;
            }}
          />
        </div>
      </div>
      <div className="image-box">
        {fileUpload?.toString()?.includes("public") === true ? (
          <div className="preview-container">
            <span onClick={(e) => handleRemoveMedia(e)}>X</span>
            <div className="preview-img">
              <img
                style={{
                  height: "128px",
                  width: "128px",
                  margin: "15px 0",
                  objectFit: "contain",
                }}
                src={generatePublicUrl(fileUpload)}
                alt=""
              />
            </div>
          </div>
        ) : !isEmpty(fileUpload?.name) ? (
          <div className="preview-container">
            <span onClick={(e) => handleRemoveMedia(e)}>X</span>
            <div className="preview-img">
              <img
                style={{
                  height: "128px",
                  width: "128px",
                  margin: "15px 0",
                  objectFit: "contain",
                }}
                src={URL.createObjectURL(fileUpload)}
                alt=""
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
