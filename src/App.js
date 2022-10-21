import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false }
}

function App() {

  const [ user, dispatch ] = useReducer( authReducer, {}, init )

  useEffect(() => {
    if ( !user ) return

    localStorage.setItem('user', JSON.stringify(user))
  }, [ user ])
  

  return (
    <div>
      <h1 className="fs-1 fw-bold text-white bg-black p-2 mb-0">Heroes App</h1>
      <AuthContext.Provider value={{
        user,
        dispatch
      }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
