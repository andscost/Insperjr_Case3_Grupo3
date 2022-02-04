
import theme from '../theme';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';

import { ThemeProvider } from '@mui/material';

import Filter from '../componets/filtro'
import chefe1 from '../componets/img/chefe1.png';
import chefe2 from '../componets/img/chefe2.png';
import chefe3 from '../componets/img/chefe3.png';
import chefe4 from '../componets/img/chefe4.png';
import chefe5 from '../componets/img/chefe5.png';
import chefe6 from '../componets/img/chefe6.png';

const SelecaoChef = () => {
  return (
    <ThemeProvider theme={theme}>
      <div class='align-vertical'>
        <h1>Seleção de Chefes</h1>
        <h5 class = 'textoTransparente'>Aqui você encontra o chef ideal para você, com diversos filtros disponiveis e avaliações. </h5>
      </div>
      <div class='construtorBusca'>
        <div class='filtros'>
          <Filter/>
        </div>
        <div class='busca'> 
          <div class='searchbar'>
            <input class='tamanhoSearchBar' type="text" placeholder="Deseja encontrar alguem especifico?"/>
            <ShuffleIcon color='primary' />
          </div>
          <div class='disposicaoChefe'>
            <div class='cartaoChefe'>
              <img src={chefe1} alt="chefe" ></img>
              chefe1
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly/>
            </div>
            <div class='cartaoChefe'>
              <img src={chefe2} alt="chefe" ></img>
              chefe2
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly/>
            </div>
            <div class='cartaoChefe'>
              <img src={chefe3} alt="chefe" ></img>
              chefe3
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly/>
            </div>
            <div class='cartaoChefe'>
              <img src={chefe4} alt="chefe" ></img>
              chefe4
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly/>
            </div>
            <div class='cartaoChefe'>
              <img src={chefe5} alt="chefe" ></img>
              chefe5
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly/>
            </div>
            <div class='cartaoChefe'>
              <img src={chefe6} alt="chefe" ></img>
              chefe6
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly/>
            </div>
          </div>
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default SelecaoChef;