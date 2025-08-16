import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import PropertyDetails from './pages/PropertyDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="property/:id" element={<PropertyDetails />} />
      </Route>
    </Routes>
  )
}

export default App 