// src/components/AddRecipeForm.jsx
import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Check if all fields are filled
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    if (ingredients.split(',').length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    // Clear error
    setError('');

    // Handle form submission (e.g., send data to a server or update state)
    const newRecipe = { title, ingredients, steps };
    console.log('New Recipe:', newRecipe);

    // Clear form
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-gray-700">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., flour, sugar, eggs"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter preparation steps"
            rows="5"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
