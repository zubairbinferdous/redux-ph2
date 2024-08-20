import React, { useState } from "react";

const FromUser = () => {
  const [user, setUser] = useState({ name: "", age: "" });
  console.log(user);
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="name"
          onBlur={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="age"
          onBlur={(e) => setUser({ ...user, age: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FromUser;
