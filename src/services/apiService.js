import axios from 'axios';

const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;

const apiService = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${githubApiKey}`,
  },
});

export const searchGitHubUsers = (username) => {
  return apiService.get(`/search/users?q=${username}`);
};
