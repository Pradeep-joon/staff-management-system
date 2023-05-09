import React from "react";
import Image1 from "./image/deepak.jpg";
import Image2 from "./image/vaasu.jpg";
import Image3 from "./image/abhinav.jpg";
import Image4 from "./image/pradeep.jpg";
import Image5 from "./image/sehaj.jpg";
import Image6 from "./image/shreya.jpg";

// <-----------Storing the image name,title,description -------->

const imageDetails = [
  { image: Image1, title: "Deepak Gill - 11915247", branch:"B.Tech CSE(Hons.)", description:  "<a href='mailto:officialgill8816@gmail.com'>G-Mail</a>  <a href='https://www.linkedin.com/in/deepakgill/'>Linkedln</a>  <a href='tel:8307164746'>Phone</a>" },
  { image: Image2, title: "Vasu Goel - 11902661", branch:"B.Tech CSE(Hons.)",     description: "<a href='mailto:officialgill8816@gmail.com'>G-Mail</a>  <a href='https://www.linkedin.com/in/deepakgill/'>Linkedln</a>  <a href='tel:8307164746'>Phone</a>" },
  { image: Image3, title: "Abhinav Singh - 11907525", branch:"B.Tech CSE", description: "<a href='mailto:officialgill8816@gmail.com'>G-Mail</a>  <a href='https://www.linkedin.com/in/deepakgill/'>Linkedln</a>  <a href='tel:8307164746'>Phone</a>" },
  { image: Image4, title: "Pradeep Joon - 11904123", branch:"B.Tech CSE(Hons.)", description: "<a href='mailto:pradeepjoon0001@gmail.com'>G-Mail</a>  <a href='https://www.linkedin.com/in/pradeep-joon/'>Linkedln</a>  <a href='tel:+9958318795'>Phone</a>" },
  { image: Image5, title: "Sehajdeep Singh - 11911239", branch:"B.Tech CSE", description:  "<a href='mailto:officialgill8816@gmail.com'>G-Mail</a>  <a href='https://www.linkedin.com/in/deepakgill/'>Linkedln</a>  <a href='tel:8307164746'>Phone</a>" },
  { image: Image6, title: "Shreya Dutta - 11902394",  branch:"B.Tech CSE(Hons.)",description: "<a href='mailto:shreyadutta2700@gmail.com'>G-Mail</a>  <a href='https://www.linkedin.com/in/duttashreya507/'>Linkedln</a>  <a href='tel:6204397490'>Phone</a>" },
];

  // <------- Implementing the above details using mapping  ----->

const AboutUs = () => {
  return (
    <div className=" mx-auto py-80px bg-black  ">
      <div className="grid grid-cols-3 gap-1">
        {imageDetails.map((imageDetail) => (
          <div key={imageDetail.title}>
            <div className="w-64 h-64 bg-cover bg-center  rounded-full  " style={{ backgroundImage: `url(${imageDetail.image})` }}></div>
              <div className="mt-4 ">
                <h2 className="text-white  px-8 hover:text-yellow-300 font-bold">{imageDetail.title}</h2>
                <h4 className="text-white italic  px-10 hover:text-red-300 ">{imageDetail.branch}</h4>
                  <h6 className="text-white  italic hover:text-blue-300 px-5 space-x-10 font-bold " dangerouslySetInnerHTML={{__html: imageDetail.description}}></h6>
            </div>
          </div>    
      ))}  
      </div>  
    </div>
  );
};

export default AboutUs;
