import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AllContexts/UserContext";
 
export default function RegisterPage() {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const {createUser,user,setUser,signInWithGoogle}=useContext(AuthContext);
  

const notify = () => toast("Successfully registered");

  const onSubmit =(data)=>{

   const {name,email,password}=data;

    createUser(email,password)
    .then((userCredentials)=>{
      const user=userCredentials.user;
      user.displayName=name;
      if(user){
        notify();
        setUser(user);
        reset();
        
      }
      console.log(user);
    })

    .catch((error)=>{
      const errorMessage =error.message;
      if(errorMessage){
        alert("email-already-in-use")
      }
      console.log(errorMessage);
    })
    

}

const handleSignInWithGoogle=()=>{
  signInWithGoogle()
  .then(result=>{
    const user=result.user;
    if(user){
      notify();
    }
  })
  .catch(error=>alert(error))
}


  return (
    <div className="bg-blend-darken">
      <Card color="transparent" shadow={false} className="py-10 ">
      <Typography variant="h4" color="white" className="text-center">
        Sign Up
      </Typography>
      <Typography color="white" className="mt-1 font-normal text-center">
        Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 m-auto mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-4 flex flex-col gap-6 text-white">
          <Input size="lg" label="Name" type="text" {...register('name', { required: true })}
            error={!!errors.name} />

          <Input size="lg" label="Email" type="email" {...register('email', { required: true })}
            error={!!errors.email} />

          <Input type="password"  size="lg" label="Password" {...register('password', { required: true })}
            error={!!errors.password}/>
        </div>
        <Checkbox required
          label={
            (
              <Typography
                variant="small"
                color="white"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="/"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button disabled={user && true} type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to="/signIn"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </Typography>
        
      </form>
      <div className="flex m-auto items-center mt-4">
          <p className="bg-white w-14 md:w-40 h-0.5 "></p>
          <p className="mx-5">OR</p>
          <p className="bg-white w-14 md:w-40 h-0.5"></p>
        </div>
        <div className="m-auto">
        
           <Button disabled={user && true} type="submit" className="mt-3 bg-deep-orange-700 hover:bg-green-600 w-70% md:w-72 " onClick={handleSignInWithGoogle}>
          Sign up with Google
        </Button>
        
        </div>
    </Card>
    
    <ToastContainer />
    </div>
  );
}