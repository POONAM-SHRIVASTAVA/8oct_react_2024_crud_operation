import React, { useState } from 'react';

const Home = () => {
  // Initial State with dummy data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  // Form State
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // Handle Add New User
  const addUser = () => {
    const newUser = {
      id: users.length + 1, // Generate a new ID
      name: newName,
      email: newEmail,
    };
    setUsers([...users, newUser]);
    setNewName('');
    setNewEmail('');
  };

  // Handle Delete User
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Handle Update User
  const updateUser = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, name: newName, email: newEmail } : user
    );
    setUsers(updatedUsers);
    setNewName('');
    setNewEmail('');
  };

  return (
    <div className="container">
      <div className="row">
        <div className='col-md-12'>
          <div className="panel-primary text-center m-4 p-4" style={{ backgroundColor: "blue" }}>
            <h1 className='text-white'>React JS CRUD API</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3>Add New User</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>

            <button type="button" className="btn btn-primary" onClick={addUser}>Add User</button>
          </form>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Users List</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-warning me-2" onClick={() => updateUser(user.id)}>Update</button>
                    <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
