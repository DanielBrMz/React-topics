import React from 'react'
import { Navigate, Route, Outlet } from 'react-router-dom'
    
const PrivateRoute = ({component: Component}: {component: JSX.Element}): React.ReactElement => {
  let auth: boolean | null = null;
  auth = false;
  return (
    //<Route {...rest} element={auth? Component : <Navigate to="/login"/> }/>
    auth ? Component : <Navigate to="/login"/>
  )
}

export default PrivateRoute;