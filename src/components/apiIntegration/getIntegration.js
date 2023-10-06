import React from "react";
import { GetIntegrationWrapper } from "./apiIntegrationStyle";

export default function GetIntegration({ newData }) {
  return (
    <GetIntegrationWrapper>
      {newData.slice(0, 5).map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </GetIntegrationWrapper>
  );
}
