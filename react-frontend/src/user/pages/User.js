import React from "react";
import UserList from "../components/UsersList";

const User = () => {
  const USERS = [{
      id: "u1",
      name: "Havid",
      image: "https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png",
      places: 3,
  }];
  return <UserList items={USERS} />;
};

export default User;
