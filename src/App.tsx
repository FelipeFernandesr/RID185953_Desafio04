import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>HOME</>} />
        <Route path="/tecnologias" element={<>TECNOLOGIAS</>} />
      </Routes>
    </Router>
  )
}

export default App
