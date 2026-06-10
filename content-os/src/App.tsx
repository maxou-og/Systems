import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import TableauDeBord from './pages/TableauDeBord'
import CarteSysteme from './pages/CarteSysteme'
import Fondamentaux from './pages/Fondamentaux'
import Recherche from './pages/Recherche'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<TableauDeBord />} />
          <Route path="carte-systeme" element={<CarteSysteme />} />
          <Route path="fondamentaux" element={<Fondamentaux />} />
          <Route path="recherche" element={<Recherche />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
