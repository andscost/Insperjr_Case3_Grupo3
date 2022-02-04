
import ResponsiveAppBar from './componets/header'
import Filter from './componets/filtro'
import theme from './theme';

import { ThemeProvider } from '@mui/material';

import chefe1 from '../componets/img/chefe1.png';
import chefe2 from '../componets/img/chefe2.png';
import chefe3 from '../componets/img/chefe3.png';
import chefe4 from '../componets/img/chefe4.png';
import chefe5 from '../componets/img/chefe5.png';
import chefe6 from '../componets/img/chefe6.png';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar/>
      <div class='central'>
          <img src={desenhoChefe} alt="desenho chefe" ></img>
        <div class='align-vertical'>
          <a href='' class='botaoTransparenteCentral' >Encontre seu Chefe</a>
          <a href='' class='textoTransparente'>Precisa de ajuda?</a>
        </div>
      </div>
      <div class='sobreNos'>
        <h3 class='tituloSobreNos'>SOBRE NÓS</h3>
        <div class = 'flexCentral'>
          <div class = 'filho-centro'>
            <img src={icon1} alt="icone" ></img>
            <div class = 'borda'>
              <h3>Como Funciona?</h3>
              <h6>Nós temos o propósito de juntar os chefs de qualidade com os nossos clientes. Temos diversas especialidades de chefs </h6>
            </div>
          </div>
          <div class = 'filho-centro'>
            <img src={icon2} alt="icone" ></img>
            <div class = 'borda'>
              <h3>Nosso processo</h3>
              <h6>Temos um processo seletivo rigoroso que mantem a qualidade dos nossos colaboradores para conseguir te fornecer um serviço de qualidade</h6>
            </div>
          </div>  
          <div class = 'filho-centro'>
            <img src={icon3} alt="icone" ></img>
            <div class = 'borda'>
              <h3>Focado na experiencia</h3>
              <h6>Somos focados em te fornecer a melhor experiencia possivel. Nossos chefs além de cozinhar iram fazer a higienização dos utensílios para você não ter preocupação</h6>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;