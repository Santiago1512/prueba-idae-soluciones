import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { camposTabla, itemsTabla } from './Campos';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function EjercicioCuatro() {
  const [columnas, setColumnas] = useState(camposTabla)
  const [datosTable, setDatosTable] = useState(itemsTabla)

  const [age, setAge] = React.useState({});

  const handleChange = (event, key) => {
    datosTable[key].estado = event.target.value;
    setAge({...age, ["estado"+key]: event.target.value});
  };

  return (
    <div className='estilosEjercicioUno'>
      <h1>Ejercicio 4</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columnas.map(item => <TableCell>{item}</TableCell>)}

            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow


            >
              {columnas.map((itemColumn, key) => {
                return (
                  <TableCell align="left">
                    {datosTable.map((item, keyDato) => {
                  
                      if (item.estado === key) {
                        return (
                          <div>
                            <div className='estilosCard'>
                              <span>{item.nombre}</span>

                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age?.["estado"+keyDato]}
                                  label="Age"
                                  onChange={(e) => handleChange(e, keyDato)}
                                >
                                                {columnas.map((itemColum, keyColum) =>{
                                                  return  <MenuItem value={keyColum}>{itemColum}</MenuItem>
                                                })}

                                  
                              
                                </Select>
                              </FormControl>
                            </div>
                          </div>
                        )
                      }
                    })

                    }
                  </TableCell>
                )
              })}

            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
