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
  console.log("newData", newData);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      setNewData(data);
    } catch (error) {
      // Handle any errors that occurred during the API request
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postData
      );
      console.log(response.data);
      if (response.status === 201) {
        setNewData([response.data, ...newData]);
        setPostData({ title: "", body: "" });
      }
    } catch (error) {
      // Handle any errors that occurred during the API request
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiIntegrationWrapper>
      <h3>API Integration</h3>
      <PostIntegration
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        postData={postData}
      />
      <GetIntegration newData={newData} />
    </ApiIntegrationWrapper>
  );
}
