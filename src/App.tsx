import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from './store/reducer/loginReducer'
import routes from './routes/router'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect (() => {
    const token: string|null = window.localStorage.getItem('token');
    if (token) dispatch(userLogin(token))
  }, [])
  const content = useRoutes(routes)

  return content
}

export default App
