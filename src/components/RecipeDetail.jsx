// src/components/RecipeDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Import the mock data

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID
    const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <div className="bg-white border rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
          {/* Replace with actual ingredient list */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
        <p>{recipe.summary}</p> {/* Replace with actual instructions */}
      </div>
    </div>
  );
}

export default RecipeDetail;
