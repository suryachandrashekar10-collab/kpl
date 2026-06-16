import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home    from './pages/Home'
import Teams   from './pages/Teams'
import Auction from './pages/Auction'
import Match   from './pages/Match'
import Stats   from './pages/Stats'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/teams"   element={<Teams />}   />
          <Route path="/auction" element={<Auction />} />
          <Route path="/match"   element={<Match />}   />
          <Route path="/stats"   element={<Stats />}   />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
