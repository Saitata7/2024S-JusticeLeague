// components/UserSearch.js
import React, { useState } from 'react';

const UserSearch = ({ users, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
