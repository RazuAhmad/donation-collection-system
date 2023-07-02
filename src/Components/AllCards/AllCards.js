import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography
} from "@material-tailwind/react";

import mosqueComplex from "../../images/assunnah-mosque-complex.jpg";
import emergencyFlood from "../../images/emergency-flood-rescue-fund.jpg";
import zakat from "../../images/zakat.jpg";
import { Link } from "react-router-dom";



  export default function AllCards() {
    return (
      <>
      <h1 className="text-white font-bold text-center text-xl md:text-3xl mt-4">Our Ongoing Campaigns</h1>

      <div className="flex justify-center flex-wrap md:items-center md:justify-evenly">

        {/* First card */}
        <Card className="mt-8 md:mt-6 md:w-96 w-80">
        <CardHeader color="blue-gray" className="relative h-56 mt-1">
          <img src={mosqueComplex}  alt="mosque" layout="fill" className="h-full w-full"/>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           Mosque Complex
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to="/donateNow/mosqueComplex">
          <Button>Donate Now!</Button>
          </Link>
          
        </CardFooter>
      </Card>

      {/* Second card */}
      <Card className="mt-8 md:mt-6 md:w-96 w-80">
        <CardHeader color="blue-gray" className="relative h-56 mt-1">
          <img src={zakat} alt="zakat" className="h-full w-full" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Zakat Fund
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link to="/donateNow/zakat">
        <Button>Donate Now!</Button>
        </Link>
        </CardFooter>
      </Card>

      {/* Third card */}
      <Card className="mt-8 md:mt-6 md:w-96 w-80">
        <CardHeader color="blue-gray" className="relative mt-1 h-56">
          <img src={emergencyFlood} alt="flood" className="h-full w-full" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Emergency Flood Appeal
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to="/donateNow/flood">
          <Button>Donate Now!</Button>
          </Link>
        
        </CardFooter>
      </Card>
      </div>
      </>
    );
  }