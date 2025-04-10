import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Tecnologies } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologias" element={<Tecnologies />} />
      </Routes>
    </Router>
  )
}

export default App
