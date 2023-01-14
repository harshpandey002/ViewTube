import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    setUsers(data);
  }

  return (
    <div>
      {users.map((user) => (
        <p className="text-blue-400" key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}
