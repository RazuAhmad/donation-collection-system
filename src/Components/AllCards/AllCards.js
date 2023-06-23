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



  export default function AllCards() {
    return (
      <div className="flex flex-col items-center md:flex-row md:justify-evenly">

        {/* First card */}
        <Card className="mt-8 md:mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56 mt-1">
          <img src={mosqueComplex}  alt="img-blur-shadow" layout="fill" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            As Sunnah Mosque Complex
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Donate Now!</Button>
        </CardFooter>
      </Card>

      {/* Second card */}
      <Card className="mt-8 md:mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56 mt-1">
          <img src={zakat} alt="img-blur-shadow" layout="fill" />
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
        <Button>Donate Now!</Button>
        </CardFooter>
      </Card>

      {/* Third card */}
      <Card className="mt-8 md:mt-6 w-96">
        <CardHeader color="blue-gray" className="relative mt-1 h-56">
          <img src={emergencyFlood} alt="img-blur-shadow" layout="fill" />
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
        <Button>Donate Now!</Button>
        </CardFooter>
      </Card>
      </div>
    );
  }