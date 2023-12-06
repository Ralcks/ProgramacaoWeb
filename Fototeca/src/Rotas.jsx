import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import GaleriaFotos from './components/GaleriaFotos.jsx';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria-fotos" element={<GaleriaFotos />} />
      </Routes>
    </BrowserRouter>
  );
}
