import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiIntegration() {
  const [newData, setNewData] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {newData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
