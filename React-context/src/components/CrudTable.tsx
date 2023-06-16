import { useContext } from 'react';
import {SoccerPlayers} from '../ts/interfaces/global_interfaces'
import CrudTableRow from "./CrudTableRow"
import CrudContext from '../context/CrudContext';

const CrudTable = () => {
    const {db: data, text} = useContext(CrudContext);
    const {name, feature1, feature2} = text;
  return (
    <div>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>{name}</th>
                    <th>{feature1}</th>
                    <th>{feature2}</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data!.length > 0 ? data!.map((el: SoccerPlayers) => <CrudTableRow key={el.id} el={el}/>) : <tr><td colSpan={4}>Sin datos</td></tr>}
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable;