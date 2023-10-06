import React, { useEffect, useState } from "react";
import GetIntegration from "./getIntegration";
import axios from "axios";
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
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
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
        response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${selectedItem.id}`,
          postData
        );
      } else {
        response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          postData
        );
      }
      setNewData([response.data, ...newData]);
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
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
