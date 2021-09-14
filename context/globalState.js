import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [userLogged, setUserLogged] = useState({
    name: '',
    email: '',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setUserLogged(JSON.parse(localStorage.getItem('user')))
  }, [])

  return (
    <AppContext.Provider value={{
        userLogged,
        setUserLogged,
        loading,
        setLoading
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}