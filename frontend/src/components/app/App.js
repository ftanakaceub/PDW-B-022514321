import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Aqui você pode adicionar seu menu de navegação */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
