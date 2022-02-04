
import PagInicial from './pages/pagina_inicial';
import SelecaoChef from './pages/selecao_chefe';
import ResponsiveAppBar from './componets/header'

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<PagInicial />} />
        <Route path="/selecao-chef" element={<SelecaoChef />} />
      </Routes>
    </div>
    
  );
}

export default App;