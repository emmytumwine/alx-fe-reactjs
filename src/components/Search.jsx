// components/Search.jsx
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // GitHub username
  const [location, setLocation] = useState(''); // Location filter
  const [minRepos, setMinRepos] = useState(''); // Minimum repository filter
  const [userData, setUserData] = useState([]); // User data result
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUserData(data.items); // Store the list of users
    } catch (err) {
      setError("No users found with the specified criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-4 space-y-4">
        {userData.map((user) => (
          <div key={user.id} className="p-4 border rounded">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h3 className="text-xl font-bold">{user.login}</h3>
            <p>Location: {user.location || 'Not Available'}</p>
            <p>Public Repos: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              View GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
