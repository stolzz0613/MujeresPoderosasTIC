import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [userLogged, setUserLogged] = useState({
    name: '',
    email: '',
    logged: false
  })
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState({})

  useEffect(() => {
    setLoading(true)
    axios.get('https://nameless-brushlands-25377.herokuapp.com/api/usuarios')
      .then( res => {
        setUsers(res)
        setLoading(false)
      })
      .catch( res => {
        setLoading(false)
      })

    const isLogged = localStorage.getItem('userLogged_MP')
    isLogged ? setUserLogged(JSON.parse(isLogged)) : setUserLogged(JSON.parse({logged: false}))
  }, [])

  return (
    <AppContext.Provider value={{
        userLogged,
        setUserLogged,
        loading,
        setLoading,
        users
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}