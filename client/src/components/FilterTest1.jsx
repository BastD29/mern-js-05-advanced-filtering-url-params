import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FilterTest1() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [location.search]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/${location.search}`);
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      setUsers(data);
    } catch (error) {
      console.error("Error during fetch operation: ", error);
    }
  };

  const handleChange = (filterName, filterValue) => {
    const params = new URLSearchParams(location.search);
    console.log("params", params);

    if (filterValue !== "") {
      params.set(filterName, filterValue);
    } else {
      params.delete(filterName);
    }

    navigate({ search: params.toString() });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <select onChange={(e) => handleChange("age", e.target.value)}>
        <option value="">Select age</option>
        <option value="21">21</option>
        <option value="47">47</option>
      </select>
      <select onChange={(e) => handleChange("city", e.target.value)}>
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
