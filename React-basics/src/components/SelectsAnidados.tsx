import React, { useState } from 'react'
import SelectList from './SelectList';

const SelectsAnidados = () => {
  const [state, setState] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");

  const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  return (
    <div>
        <h2>Selects Anidados</h2>
        <h3>México</h3>
        <SelectList title="estado" url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`} handleChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setState(e.target.value)}}/>
        {state && <SelectList title="municipios" url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setCounty(e.target.value)}}/>}
        {county && <SelectList title="colonia" url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${county}?token=${TOKEN}`} handleChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setNeighborhood(e.target.value)}}/>}
    </div>
  );
}

export default SelectsAnidados;