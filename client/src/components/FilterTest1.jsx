import React, { useEffect, useState } from "react";

export default function FilterTest1() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [name, age, city]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `/api/?name=${name}&age=${age}&city=${city}`
      );
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      setUsers(data);
    } catch (error) {
      console.error("Error during fetch operation: ", error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setName(e.target.value)}
      />
      <select onChange={(e) => setAge(e.target.value)}>
        <option value="">Select age</option>
        <option value="21">21</option>
        <option value="47">47</option>
      </select>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">Select city</option>
        <option value="New York">New York</option>
        <option value="Metropolis">Metropolis</option>
      </select>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>
    </>
  );
}
