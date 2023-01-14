import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch("http://localhost:3000/api");
      const data = await res.json();
      console.log(data);
      setUsers([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {users.map((user) => (
        <p className="text-blue-400" key={user.id}>
          {user.name}
        </p>
      ))}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <img
        style={{
          width: 300,
        }}
        src={`https://api.dicebear.com/5.x/pixel-art/svg?seed=${name}`}
        alt=""
      />
    </div>
  );
}
