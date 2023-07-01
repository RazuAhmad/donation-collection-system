import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AllContexts/UserContext'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {

    const {user,setUser,loading}=useContext(AuthContext);
    const location = useLocation();

    useEffect(()=>{
        setUser(user)
    },[user])


    

    if(user && user.uid){
        return children
    }

    if(loading){
        return <h1 className='text-white text-center font-bold py-9 ' >Loading.........</h1>
        
    }

  return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
}

export default PrivateRoute