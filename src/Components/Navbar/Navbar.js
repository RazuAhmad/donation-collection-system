import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

export default function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* This is home nav link */}
      <Link to="/home">
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-bold hover:underline underline-offset-auto"
        >
          <a href="/" className="flex items-center">
            Home
          </a>
        </Typography>
      </Link>

      {/* This is donationSummary nav link */}
      <Link to="/donationSummary">
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-bold hover:underline-offset-2"
        >
          <a href="/" className="flex items-center">
            Donation Summary
          </a>
        </Typography>
      </Link>

      {/* This is ALl Donators nav link */}
      <Link to="/allDonators">
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a href="/" className="flex items-center">
            All Donators
          </a>
        </Typography>
      </Link>

      {/* This is donate now button */}
      <Link to="/donateNow">
        <Button variant="gradient" size="md" className=" lg:inline-block">
          <span>Donate Now</span>
        </Button>
      </Link>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-green-300 border border-b-1 border-blue-500">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center font-bold cursor-pointer">
            <img src={logo} alt="nav logo" className="w-12 mr-1" />
            Donation System
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Link to="/registerNow">
              <Button
                variant="gradient"
                size="md"
                className="hidden lg:inline-block"
              >
                <span>Sign Up</span>
              </Button>
            </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="md" fullWidth className="mb-2">
            <span>Sign Up</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}

/*
<Typography
            as="a"
            href="#"
            className=" cursor-pointer py-1.5 font-medium"
          >
            Donation System
          </Typography>

*/
