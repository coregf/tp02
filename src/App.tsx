

import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <header>
        <h1>Tienda</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/register">Registro</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
