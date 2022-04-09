/** @format */

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
function Profile() {
  const [user] = useState(currentUser);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>{currentUser.username}</h1>
    </div>
  );
}

export default Profile;
