// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import DetailPage from './DetailPage/DetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default App
