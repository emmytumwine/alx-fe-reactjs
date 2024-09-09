<<<<<<< HEAD
function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h1 className="text-lg sm:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
          John Doe
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  
=======
import React from 'react';

function UserProfile(props) {
return (
<div style={{ border: '1px solid gray', padding: '20px', margin: '10px', borderRadius: '8px' }}>
    <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
    <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p>Bio: {props.bio}</p>
</div>
);
}

export default UserProfile;
>>>>>>> 86ac60da8c29cee95f9a5bc9f489366ae106b6fa
