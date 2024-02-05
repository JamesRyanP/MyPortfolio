import React from "react";
import { useParams } from "react-router-dom";

const WebsiteDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Website Detail Page</h2>
      <p>Item ID: {id}</p>
      {/* Add website-specific details and layout */}
    </div>
  );
};

export default WebsiteDetailPage;