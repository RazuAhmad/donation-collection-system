import {
    Button,
    Card,
    Input,
    Typography,
  } from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
  import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AllContexts/UserContext";

  
   
  export default function SignInPage() {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    
    const {signInUser,user}=useContext(AuthContext);
    
    const navigate=useNavigate();

    const onSubmit =(data)=>{
      const {email,password}=data;

     signInUser(email,password)
     .then((userCredential)=>{
      const user=userCredential.user;
      if(user){
        alert("Successfully logged in")
        navigate('/donateNow')
      }
      reset();
      
     })
     .catch((error)=>{
      const errorMessage =error.message;
      if(errorMessage){
        alert(errorMessage)
      }
      // console.log(errorMessage);
     })


        // console.log(data);
    }

    return (
      <div className="bg-blend-darken">
        <Card color="transparent" shadow={false} className="py-10 ">
        <Typography variant="h4" color="white" className="text-center">
          You have to log In First
        </Typography>
        <Typography color="white" className="mt-1 font-normal text-center">
          Enter your Email & Password to Log In.
        </Typography>

        {/* Form starts here */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 m-auto mb-2 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-4 flex flex-col gap-6 text-white">
            
            <Input size="lg" label="Email" type="email" {...register('email', { required: true })}
            error={!!errors.email}
            
         />
            <Input type="password" size="lg" label="Password" {...register('password', { required: true })}
            error={!!errors.password}
            />
          </div>
          
          <Button disabled={user && true} type="submit" className="mt-6" fullWidth>
            Log In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            New User?{" "}
            <Link
              to="/registerNow"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
      </div>
    );
  }