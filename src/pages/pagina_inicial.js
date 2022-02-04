
import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material';

import theme from '../theme';
import desenhoChefe from '../componets/img/desenho_chefe.png'
import icon1 from '../componets/img/icon_como_funciona.png';
import icon2 from '../componets/img/icon_nosso-processo.png';
import icon3 from '../componets/img/icon_experiencia.png';

const PagInicial = () => {
    return (
        <ThemeProvider theme={theme}>
            <div class='central'>
                <img src={desenhoChefe} alt="desenho chefe" ></img>
                <div class='align-vertical'>
                <Link to="/selecao-chef" class='botaoTransparenteCentral'>Encontre seu Chefe</Link>
                <Link to="/" class='textoTransparente'>Precisa de ajuda?</Link>
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
  
  export default PagInicial;