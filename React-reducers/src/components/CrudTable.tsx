import {SoccerPlayers} from '../ts/interfaces/global_interfaces'
import { IText } from '../ts/types/global_types';
import CrudTableRow from "./CrudTableRow"

const CrudTable = ({data, setDataToEdit, deleteData, text}: {data: SoccerPlayers[], setDataToEdit: (dataToEdit: SoccerPlayers)=>void, deleteData: (id: number)=>unknown, text: IText}) => {
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
                {data.length > 0 ? data.map((el: SoccerPlayers) => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>) : <tr><td colSpan={4}>Sin datos</td></tr>}
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable;