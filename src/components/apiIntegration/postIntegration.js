import React, { useState } from "react";
import { PostIntegrationWrapper } from "./apiIntegrationStyle";

export default function PostIntegration(props) {
  const { handleChange, handleSubmit, postData, selectedItem } = props;
  const [formErrors, setFormErrors] = useState({});

  const handleValidation = () => {
    const errors = {};
    if (postData.title.trim() === "") {
      errors.title = "Title is required*";
    }
    if (postData.body.trim() === "") {
      errors.body = "Content is required*";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      handleSubmit(e);
    }
  };

  return (
    <PostIntegrationWrapper>
      <form onSubmit={handleFormSubmit}>
        <label>Title*</label>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        {formErrors.title && <p>{formErrors.title}</p>}
        <label>Content*</label>
        <textarea
          name="body"
          value={postData.body}
          onChange={handleChange}
          placeholder="Content"
        />
        {formErrors.body && <p>{formErrors.body}</p>}
        <button type="submit">{selectedItem ? "Update" : "Submit"}</button>
      </form>
    </PostIntegrationWrapper>
  );
}
