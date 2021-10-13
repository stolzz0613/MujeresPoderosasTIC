import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [userLogged, setUserLogged] = useState({
    name: '',
    cc: '',
    email: '',
    logged: false
  })
  const [quotes, setquotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState({})

  useEffect(() => {
    if (JSON.stringify(users) === '{}' && !loading) {
      setLoading(true)
      axios.get('https://nameless-brushlands-25377.herokuapp.com/api/usuarios')
      .then( res => {
        setUsers(res)
        setLoading(false)
      })
      .catch( res => {
        setLoading(false)
      })
    }

    if (!userLogged.logged) {
      const isLogged = localStorage.getItem('userLogged_MP')
      isLogged ? setUserLogged(JSON.parse(isLogged)) : setUserLogged({logged: false})
    }
  }, [])

  useEffect(() => {
    if (JSON.stringify(quotes) === '[]' && !loading) {
      setLoading(true)
      axios.get('https://nameless-brushlands-25377.herokuapp.com/api/google')
      .then( res => {
        setquotes([res.data])
        setLoading(false)
      })
      .catch( res => {
        setLoading(false)
      })
    }
  }, [])

  return (
    <AppContext.Provider value={{
        userLogged,
        setUserLogged,
        loading,
        setLoading,
        quotes,
        users
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}