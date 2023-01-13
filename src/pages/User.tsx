import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userName} = useParams();
  return (
    <div>
        <h3>Perfil del usuario</h3>
        <p>Nombre del usuario: <b>{userName}</b></p>
    </div>
  )
}

export default User