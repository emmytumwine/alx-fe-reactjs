<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
=======
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
>>>>>>> 86ac60da8c29cee95f9a5bc9f489366ae106b6fa
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
<<<<<<< HEAD
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserProfile/>
    </>
  )
}

export default App
=======
      <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
>>>>>>> 86ac60da8c29cee95f9a5bc9f489366ae106b6fa
