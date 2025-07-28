import './css/App.css'
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Favorites  from "./pages/Favorites"
import NavBar from './components/NavBar'
import {MovieProvider} from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-contents">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
