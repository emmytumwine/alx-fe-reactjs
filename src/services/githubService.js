export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
  
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }
  
    const url = `https://api.github.com/search/users?${query}&page=${page}&per_page=10`;
  
    try {
      const response = await axios.get(url);
      return response.data; // Returns user data as a list
    } catch (error) {
      throw new Error('Error fetching user data');
    }
  };
  