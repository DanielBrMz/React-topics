import { createContext, useEffect, useState } from "react";
import { SoccerPlayers, ICrudContext } from "../ts/interfaces/global_interfaces";
import { helpHttp } from "../helpers/helpHttp";
import { Text } from "../ts/types/global_types";

const CrudContext = createContext<ICrudContext>({} as ICrudContext);

const CrudProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
  const [db, setDb] = useState<SoccerPlayers[] | null>(null);
  const [dataToEdit, setDataToEdit] = useState<SoccerPlayers | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const text: Text = {
    name: "Nombre",
    feature1: "Posición",
    feature2: "Equipo"
  }
  const api = helpHttp();
  const url: string = "http://localhost:5000/soccerplayers";
  
  useEffect(() => {
    setLoading(true);

    helpHttp().get(url).then(res => {
        //console.log(res);
        if(!res.err){
            setDb(res);
            setError(null);
        } else {
            setDb(null);
            setError(res.err);
        }

        setLoading(false);
    });  
  }, [url])

  const createData = (data: SoccerPlayers): void => {
    
    api.post(url, {body:JSON.stringify(data), headers: {"content-type": "application/json"}})
    .then(res => {
        if(!res.err) setDb([...db!, res]);
        else setError(res);
    });

    setDb([...db!, data]);
  }

  const updateData = (data: SoccerPlayers): void => {
    const endpoint: string = `${url}/${data.id}`;
        api.put(endpoint, {body:JSON.stringify(data), headers: {"content-type": "application/json"}})
    .then(res => {
        if(!res.err){
            let newData: SoccerPlayers[] = db!.map((el: SoccerPlayers) => el.id === data.id ? data : el);
            setDb(newData);
        }else setError(res);
    });
  }

  const deleteData = (id: number): unknown => {
    let isDelete: boolean = window.confirm(`¿Estás seguro de eliminar el registro ${id}?`);

    if (isDelete) {
      const endpoint: string = `${url}/${id}`;

      api.del(endpoint).then(res => {
        if(!res.err){
            let newData: SoccerPlayers[] = db!.filter((el: SoccerPlayers) => el.id !== id);
            setDb(newData);
        }else setError(res);

        });

    } else return;
  }

    const data: ICrudContext = {db, loading, error, createData, updateData, deleteData, dataToEdit, setDataToEdit, text}

    return (
        <CrudContext.Provider value={data}>
            {children}
        </CrudContext.Provider>
    )
}

export {CrudProvider};
export default CrudContext;