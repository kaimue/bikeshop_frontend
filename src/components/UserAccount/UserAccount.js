import React, { useEffect, useState } from "react";

const UserAccount = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const searchUsers = async () => {
      const url = `http://localhost:5000/user/me`;
      try {
        const res = await fetch(url);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          console.error("Fetch error!");
          return "No user found!";
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    searchUsers();
  }, []);

  return users.map((user) => (
    <div>
      <div className="container border" key={user.userId}>
        <h1>Hi</h1>
      </div>
    </div>
  ));
};
export default UserAccount;
