import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AllContexts/UserContext'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {

    const {setUser,user,loading}=useContext(AuthContext);
    const location = useLocation();

    useEffect(()=>{
        setUser(user);
    },[])

    if(loading){
        return <div>Loading.........</div>
    }

    if(user && user.uid){
        return children
    }
  return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
}

export default PrivateRoute