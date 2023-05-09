import React, { useState } from "react";
import Typed from "react-typed";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
let searchvalue;
let searchvalue01;
export default function Verifyemployeedetail() {
    const [data, setData] = useState([]);




    const fetch = async () => {
        const q = query(
          collection(db, "Users"),
          where("name", "==", searchvalue),
          where("Aadhar_No", "==", searchvalue01)
        );
        const querySnapshot = await getDocs(q);
        const documents = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          // console.log(doc.id, "=>", data.name);
          documents.push(doc.data());
          setData(documents);
          console.log(documents);
        }, []);
        
      };







  const handleQueryChange = (e) => {
    e.preventDefault();
    searchvalue = e.target.value;
  };
  const handleQueryChange01 = (e) => {
    e.preventDefault();
    searchvalue01 = e.target.value;
  };





  return (
    <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
      <div className=" p-5 text-[30px] md:text-[50px] text-white">
        <Typed
          strings={["Verify Employee Details "]}
          typeSpeed={100}
          loop={true}
          backSpeed={50}
        />
      </div>
      <div class="absolute right-10 top-20 h-10 ...">
        <div class="content-end grid gap-x-8 gap-y-4">
          <input
            type="text"
            id="header-search black"
            border="border -black rounded-md"
            placeholder="Name"
            name="Name"
            value={searchvalue}
            onChange={handleQueryChange}
          />
          <input
            type="text"
            id="header-search black"
            border="border -black rounded-md"
            placeholder="Aadhar Id"
            name="Aadhar_id"
            value={searchvalue01}
            onChange={handleQueryChange01}
          />
          <button
            onClick={fetch}
            class="inline-flex items-center py-0.4 px-12 mr-9 ml-11 mt-1 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            verify
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
      {data.map((doc) => (
        <div className=" p-5 text-[10px] md:text-[20px] text-white">
        <p>Company: {doc.Companymail}</p>
        <p>Status: {doc.Status}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
