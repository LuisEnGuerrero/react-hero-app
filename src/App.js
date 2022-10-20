import React from 'react'
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div>
      <h1 className="fs-1 fw-bold text-white bg-black p-2 mb-0">Heroes App</h1>
      <AppRouter />
    </div>
  );
}

export default App;
