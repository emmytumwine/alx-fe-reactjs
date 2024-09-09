// src/components/HomePage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'; // Import the mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Set the recipes data when the component mounts
    setRecipes(data);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 inline-block">View Recipe</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
