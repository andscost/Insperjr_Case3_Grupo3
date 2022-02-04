import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';


export default function Filter() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  return (
        <List>
            <h3>Filtros</h3>
        <Divider/>
            <ListItemButton onClick={handleClick1}>
                <ListItemText primary="Tipo de Culinaria" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Japonesa" />
                        <FormControlLabel control={<Checkbox />} label="Brasileira" />
                        <FormControlLabel control={<Checkbox />} label="Italiana" />
                    </FormGroup>
            </Collapse>
        <Divider/>
            <ListItemButton onClick={handleClick2}>
                <ListItemText primary="Refeição Desejada" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Café da Manha" />
                        <FormControlLabel control={<Checkbox />} label="Almoço" />
                        <FormControlLabel control={<Checkbox />} label="Jantar" />
                    </FormGroup>
            </Collapse>
        <Divider/>
            <ListItemButton onClick={handleClick3}>
                <ListItemText primary="Disponibilidade" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <h3>calendario</h3>
            </Collapse>
          <Divider/>
            <ListItemButton onClick={handleClick4}>
                <ListItemText primary="Avalição do Chefe" />
                {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
                <Rating name="half-rating-read" defaultValue={0} precision={0.5} />        
            </Collapse>
        <Divider/>
        </List>
  );
}