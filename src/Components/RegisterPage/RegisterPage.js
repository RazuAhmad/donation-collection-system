import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function RegisterPage() {
  return (
    <div className="bg-blend-darken">
      <Card color="transparent" shadow={false} className="py-10 ">
      <Typography variant="h4" color="white" className="text-center">
        Sign Up
      </Typography>
      <Typography color="white" className="mt-1 font-normal text-center">
        Enter your details to register.
      </Typography>
      <form className="mt-8 m-auto mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-4 flex flex-col gap-6 text-white">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Checkbox
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
        <Button className="mt-6" fullWidth>
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