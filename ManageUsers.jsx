import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./manageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    navigate(`/edit-user/${user.id}`);
  };

  const handleRemove = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
        alert("User removed successfully");
      } else {
        console.error("Failed to remove user");
      }
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="manage-users">
      <h3>Manage Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="remove-button" onClick={() => handleRemove(user.id)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
