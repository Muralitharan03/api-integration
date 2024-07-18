import React, { useEffect, useState } from "react";
import GetIntegration from "./getIntegration";
import PostIntegration from "./postIntegration";
import { ApiIntegrationWrapper } from "./apiIntegrationStyle";

export default function ApiIntegration() {
  const [newData, setNewData] = useState([]);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setNewData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      if (selectedItem) {
        response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${selectedItem.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          }
        );
      } else {
        response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          }
        );
      }
      const responseData = await response.json();
      setNewData([responseData, ...newData]);
      setPostData({ title: "", body: "" });
    } catch (error) {
      console.error(error);
    }
    setSelectedItem(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      const updatedData = newData.filter((item) => item.id !== id);
      setNewData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApiIntegrationWrapper>
      <h3>API Integration</h3>
      <PostIntegration
        handleChange={handleChange}
        handleSubmit={handleFormSubmit}
        postData={postData}
        selectedItem={selectedItem}
      />
      <GetIntegration
        newData={newData}
        setSelectedItem={setSelectedItem}
        setPostData={setPostData}
        handleDelete={handleDelete}
      />
    </ApiIntegrationWrapper>
  );
}