import { Link } from "react-router-dom";

import logo from './img/logo.png';

const ResponsiveAppBar = () => { 
  return (
    <body>
      <header class='header'>
        <img src={logo} alt="Logo" />
        <ul class='header_esq'>
          <Link to="" class='botaoPreto'>Sobre Nós</Link>
          <Link to="" class='botaoPreto'>Nossos Chefs</Link>
          <Link to="" class='botaoPreto'>Como Funciona</Link>
        </ul>
        <ul class='header_dir'>
          <Link to="/" class='botaoTransparente'>Login</Link>
          <Link to="" class='botaoTransparente'>Seja um Colaborador</Link>
        </ul>
      </header>
    </body>
  );
};

export default ResponsiveAppBar;