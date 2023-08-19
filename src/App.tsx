import { useRoutes } from 'react-router-dom'
import routes from './routes/router'
import './App.css'

function App() {
  const content = useRoutes(routes)

  return content
}

export default App
