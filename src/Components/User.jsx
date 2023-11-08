import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { name } = params;
  return <div>{name}'s Page</div>;
};

export default User;
