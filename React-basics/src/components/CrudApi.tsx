import React from 'react'
import { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import {SoccerPlayers} from '../ts/interfaces/global_interfaces';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = (): JSX.Element => {
  const [db, setDb] = useState<SoccerPlayers[] | null>(null);
  const [dataToEdit, setDataToEdit] = useState<SoccerPlayers | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const text = {
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

  return (
    <div>
        <h2>CRUD API</h2>
        <article className="grid-1-2">
        <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} text={text}/>
        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor={"#dc3545"}/>}
        {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} text={text}/>}
      </article>
    </div>
  )
}

export default CrudApi;
