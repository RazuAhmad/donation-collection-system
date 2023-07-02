import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AllContexts/UserContext'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";


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
        return <div>
            <h1 className='text-white text-center font-bold py-9 ' >Loading.........</h1>
        <Spinner className="h-16 w-16 m-auto text-blue-500/10" />
        </div>
        
    }

  return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
}

export default PrivateRoute