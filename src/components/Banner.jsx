import React,{useState} from 'react'
import Addemployeedetail from './Addemployeedetail';
import Updateemployeedetail from './Updateemployeedetail';
import Verifyemployeedetail from './Verifyemployeedetail';
import {useLocation} from 'react-router-dom';

import {
    Card,
    CardHeader,
   // CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";



export default function Banner() {
  const location = useLocation();
  console.log(location.state.cusermail);
  const [showPopupadd,setShowPopupadd]  = useState(false);
  const handleClickadd = () =>{
    setShowPopupadd(true);
    document.body.style.overflow = 'hidden';

    
  };

  const [showPopupupdate,setShowPopupsupdate]  = useState(false);
  const handleClickupdate = () =>{
    setShowPopupsupdate(true);
    document.body.style.overflow = 'hidden';
  };
  const [showPopupverify,setShowPopupverify]  = useState(false);
  const handleClickverify = () =>{
    setShowPopupverify(true);
    document.body.style.overflow = 'hidden';
  };
  
     
    return(
        <>{(showPopupadd && <Addemployeedetail  />) || (showPopupupdate && <Updateemployeedetail/>) || (showPopupverify && <Verifyemployeedetail/>)}<div className='bg-black w-full py-[200px] flex px-20 ' >
          {/* show? */}
          <Card color="green" variant="gradient" className="w-full max-w-[20rem]  m-12 p-8">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            
            <Typography
              variant="large"
              color="white"
              className="font-normal uppercase"
            >
              Add Personal Information
            </Typography>

          </CardHeader>


          <CardFooter className="mt-12 p-0">
          
              
            
            <Button onClick={handleClickadd }
              size="lg"
              color="white"
              className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Add Employee
            </Button>
            
          </CardFooter>
        </Card>
         <Card color="green" variant="gradient" className="w-full max-w-[20rem]  m-12 p-8 ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="large"
              color="white"
              className="font-normal uppercase"
            >
              Update  Information
            </Typography>

          </CardHeader>


          <CardFooter className="mt-12 p-0">
            <Button onClick={handleClickupdate}
              size="lg"
              color="white"
              className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Upadte Now
            </Button>
          </CardFooter>
        </Card>

        <Card color="green" variant="gradient" className="w-full max-w-[20rem]  m-12 p-5 " >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="large"
              color="white"
              className="font-normal uppercase"
            >
              Verify the Information
            </Typography>

          </CardHeader>


          <CardFooter className="mt-12 p-0">
            <Button on onClick={handleClickverify}
              size="lg"
              color="white"
              className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Verify
            </Button>
          </CardFooter>
        </Card>
        </div>
        </>
            
    ); 
}
