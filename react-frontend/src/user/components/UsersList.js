import React from "react";
import UsersItem from "./UsersItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (!props.items.length) {
    return (
      <div className="center">
        <h2>No Users found!</h2>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UsersItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
