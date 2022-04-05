import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Button from '@mui/material/Button';

export function EjercicioUno() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [kilometraje, setkilometraje] = useState(5000);
    const [dias, setDias] = useState(0);
    const [activo, setActivo] = useState(false);

    const calcularRangos = () => {
        const fecha2 = new Date()
        const resta = fecha2.getTime() - selectedDate.getTime()
        const resultadoDeDias = Math.round(resta / (1000 * 60 * 60 * 24));
        const calculardias = (resultadoDeDias * parseInt(kilometraje)) / 50000
        setDias(calculardias)
        setActivo(true)
    }


    return (
        <div className="estilosEjercicioUno">
            <h1>Ejercico 1</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    label="Fecha inicio"
                    inputVariant="outlined"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </MuiPickersUtilsProvider>
            <TextField
                id="outlined-required"
                label="cantidad de kilometros por día"
                value={kilometraje}
                type="number"
                className="inputUno"
                maxDate={new Date()}
                onChange={(e) => setkilometraje(e.target.value)}
            />
            <Button variant="outlined" onClick={calcularRangos}>Calcular</Button>
            {activo &&
                <h1>El número de matenimiento que debe realizar son {dias}</h1>
            }
        </div>

    )
}