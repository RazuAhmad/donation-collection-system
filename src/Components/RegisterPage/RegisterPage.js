import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
 
export default function RegisterPage() {

  const { register, handleSubmit, reset, setValue,formState: { errors } } = useForm();

  const onSubmit =(data)=>{

    fetch('http://localhost:5000/register',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);

    })

    console.log(data);
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
        <Button type="submit" className="mt-6" fullWidth>
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
    </Card>
    </div>
  );
}