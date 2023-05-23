import React from "react";
import { useStateContext } from "../context/StateContext";
function UserNav(props) {
  const { user } = useStateContext();
  return (
    <div className="userNav">
      <div className="userImage">
        <img src="https://cdn.sanity.io/images/l709lxgz/production/4f269a6a19ccc976c905fb389f9b486e391d8038-75x75.png" />
      </div>
      <div className="userDetails">
        <p className="userName">Welcome {user.name} </p>
        <p className="userEmail">{user.email}</p>
      </div>
    </div>
  );
}

export default UserNav;
