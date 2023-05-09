import React from "react";
import Typed from "react-typed";
import { Navigate, useLocation } from "react-router-dom";
import { db1, db } from "../firebase";
// import { Firestore } from "firebase/firestore";
// import { collection, getDocs, where, query } from "firebase/firestore";
// import { doc, getDoc } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

let searchvalue;
let userId;
export default function Updateemployeedetail() {
  const location = useLocation();
  console.log(location.state.cuser_id);
  const currentuserid = location.state.cuser_id;
  // const currentusermail = location.state.cusermail;
  const [data, setData] = useState([]);

  const fetch = async () => {
    const q = query(
      collection(db, "Users"),
      where("CompanyId", "==", currentuserid),
      where("Status", "in", ["Ongoing", "Notice"]),
      where("Aadhar_No", "==", searchvalue)
    );
    const querySnapshot = await getDocs(q);
    const documents = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // console.log(doc.id, "=>", data.name);
      documents.push(doc.data());
      userId = doc.id;
      console.log("testttt", userId);
      setData(documents);
      console.log(documents);
      
    }, []);
    
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const newData = {
      Email: employeeDetail.employeeEmail,
      Contact: employeeDetail.employeeContact,
      Role: employeeDetail.employeerole,
      Lrate: employeeDetail.employeeleadrate,
      Brate: employeeDetail.employeebehrate,
      Trate: employeeDetail.employeetechrate,
      PWI: employeeDetail.employeenofproject,
      Status: employeeDetail.employeeStatus ,
      
      // Email: "0000",
      // Contact: "00000",
      // Role: "ttttttttttttt",
      // Lrate: "ttttttttttttt",
      // Brate: "ttttttttttttt",
      // Trate: "ttttttttttttt",
      // PWI: "ttttttttttttt",
      // Status: "Notice",
    };
    const userRef = doc(db1, "Users", userId);
    try {
      console.log("start");
      await updateDoc(userRef, newData);
      alert(`Data has been updated Successfully!`);
      Navigate("/bannner")
    } catch (e) {
      console.log(e);
    }
  };

  let [employeeDetail] = useState({
    employeeName: data.name,
    employeeEmail: "",
    employeeContact: "",
    employeeid: "",
    employeeStatus: "",
    employeerole: "",
    employeenofproject: "",
    employeebehrate: "",
    employeeleadrate: "",
    employeetechrate: "",
    
  });
  // const [employeeNameError, setemployeeNameError] = useState("");
  // const [employeeEmailError, setemployeeEmailError] = useState("");
  // const [employeeContactError, setemployeeContactError] = useState("");
  // const [employeeidError, setemployeeidError] = useState("");
  // const [employeeStatusError, setemployeeStatusError] = useState("");

  // const validate = () => {
  //   const errors = {};
  //   if (employeeDetail.employeeName === "")
  //     errors.employeeName = "Employee Name is required";

  //   if (employeeDetail.employeeEmail === "")
  //     errors.employeeEmail = "Email  is required";

  //   if (employeeDetail.employeeContact === "")
  //     errors.employeeContact = "Contact Detail  is required";

  //   if (employeeDetail.employeeid === "")
  //     errors.employeeid = "Aadhar No. is required";

  //   if (employeeDetail.employeeStatus === "")
  //     errors.employeeStatus = "Employee Branch is required";

  //   return Object.keys(errors).length === 0 ? null : errors;
  // };
  // const [records, setRecords] = useState([]);
  // const handleInput = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   setemployeeDetail({ ...employeeDetail, [name]: value });
  // };

  const handleInput01 = (e) => {
    employeeDetail.employeeEmail = e.target.value;
    console.log("Input onchange");
  };
  const handleInput02 = (e) => {
    employeeDetail.employeeContact = e.target.value;
    console.log("Input onchange");
  };
  const handleInput03 = (e) => {
    employeeDetail.employeerole = e.target.value;
    console.log("Input onchange");
  };
  const handleInput04 = (e) => {
    employeeDetail.employeeStatus = e.target.value;
    console.log("Input onchange");
  };
  const handleInput05 = (e) => {
    employeeDetail.employeenofproject = e.target.value;
    console.log("Input onchange");
  };
  const handleInput06 = (e) => {
    employeeDetail.employeebehrate = e.target.value;
    console.log("Input onchange");
  };
  const handleInput07 = (e) => {
    employeeDetail.employeetechrate = e.target.value;
    console.log("Input onchange");
  };
  const handleInput08 = (e) => {
    employeeDetail.employeeleadrate = e.target.value;
    console.log("Input onchange");
  };

  // const handlesubmit1 = (e) => {
  //   e.preventDefault();
  //   const newRecord = {
  //     ...employeeDetail,
  //     id: new Date().getTime().toString(),
  //   };
  //   console.log(records);
  //   setRecords([...records, newRecord]);
  //   console.log(records);

  //   setemployeeDetail({
  //     employeeName: "",
  //     employeeEmail: "",
  //     employeeContact: "",
  //     employeeid: "",
  //     employeeStatus: "",
  //     employeenofproject: "",
  //     employeebehrate: "",
  //     employeetechrate: "",
  //     employeeleadrate: "",
  //     employeerole: "",
  //   });

  //   const errors = validate();

  //   if (errors) {
  //     setemployeeNameError(errors.employeeName);
  //     setemployeeEmailError(errors.employeeEmail);
  //     setemployeeContactError(errors.employeeContact);
  //     setemployeeidError(errors.employeeid);
  //     setemployeeStatusError(errors.employeeStatus);
  //   } else {
  //     handleUpdateUser();
  //     setemployeeNameError("");
  //     setemployeeEmailError("");
  //     setemployeeContactError("");
  //     setemployeeidError("");
  //     setemployeeStatusError("");
  //     handleUpdateUser();
  //   }
  // };
  const handleQueryChange = (e) => {
    e.preventDefault();
    searchvalue = e.target.value;
  };

  return (
    <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
      <div className=" p-3 text-[30px] md:text-[50px] text-white">
        <Typed
          strings={["Update Employee Details "]}
          typeSpeed={100}
          loop={true}
          backSpeed={50}
        />
      </div>

      <div class="absolute right-10 top-10 h-16 ...">
        {/* <form > */}
        <div class="content-end">
          <input
            type="text"
            id="header-search black"
            border="border -black rounded-md"
            placeholder="Search Employees"
            name="s"
            value={searchvalue}
            onChange={handleQueryChange}
          />
          <button
            onClick={fetch}
            class="inline-flex items-center py-0.5 px-4 ml-3 mt-10 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Search
          </button>
        </div>
        {/* </form> */}
      </div>
      <div>
        {data.map((doc) => (
          <form className="grid grid-cols-2 gap-25" onSubmit={handleUpdateUser}>
            <div className="m-4">
              <label className="mr-12 text-white" htmlFor="employeeName">
                {" "}
                Name
              </label>

              <input
                // onChange={handleInput}
                className="border border-blue-800 rounded-md bg-gray-500"
                placeholder="Enter the Employeename "
                autoComplete="off"
                name="employeeName"
                defaultValue={doc.name}
                value={doc.name}
                id="employeeName"
                type="text"
              />
              {/* <div className="text-red-500 text-sm">{employeeNameError}</div> */}
            </div>
            <div className="m-4">
              <label className="mr-11 text-white" htmlFor="employeeEmail">
                E-mail
              </label>

              <input
                onChange={handleInput01}
                className="border border- black rounded-md "
                placeholder="Enter the E-mail"
                autoComplete="off"
                name="employeeEmail"
                defaultValue={doc.Email }
                // value={ employeeDetail.employeeEmail || employeeDetail.employeeEmail}
                id="employeeEmail"
                type="text"
              />
              {/* <div className="text-red-500 text-sm">{employeeEmailError}</div> */}
            </div>
            <div className="m-4">
              <label className="mr-8 text-white" htmlFor="employeeContact">
                Contact
              </label>

              <input
                onChange={handleInput02}
                className="border border- black rounded-md "
                placeholder="Enter the Contact No."
                autoComplete="off"
                name="employeeContact"
                defaultValue={doc.Contact}
                // value={ employeeDetail.employeeContact}
                id="employeeContact"
                type="text"
              />
              {/* <div className="text-red-500 text-sm ">
                {employeeContactError}
              </div> */}
            </div>
            <div className="m-5">
              <label className="mr-12 text-blue-600" htmlFor="employeeField">
                Aadhar
              </label>

              <input
                // onChange={handleInput03}
                className="border border-blue-800 rounded-md bg-gray-500"
                placeholder="Aadhar"
                autoComplete="off"
                name="employeeid"
                defaultValue={doc.Aadhar_No}
                
                id="employeeid"
                type="text"
              />
              {/* <div className="text-red-500 text-sm">{employeeidError}</div> */}
            </div>
            <div className="m-5">
              <label className="mr-12 text-white" htmlFor="employeeStatus">
                Status
              </label>

              <input
                onChange={handleInput04}
                className="border border- black rounded-md "
                placeholder="Ongoing || Notice || Exited "
                autoComplete="off"
                name="employeeStatus"
                defaultValue={doc.Status}
                
                id="employeeStatus"
                type="text"
              />
              {/* <div className="text-red-500 text-sm">{employeeStatusError}</div> */}
            </div>
            <div className="m-5">
              <label className="mr-12 text-white" htmlFor="employeeStatus">
                Project worked in
              </label>

              <input
                onChange={handleInput05}
                className="border border- black rounded-md "
                placeholder="No. of projects "
                autoComplete="off"
                name="employeenofproject"
                defaultValue={doc.PWI}
                id="employeenofproject"
                type="text"
              />
            </div>
            <div className="m-5">
              <label className="mr-12 text-white" htmlFor="employeeStatus">
                Behavioural Rating
              </label>

              <input
                onChange={handleInput06}
                className="border border- black rounded-md "
                placeholder="O | A | B | C | D "
                autoComplete="off"
                name="employeebehrate"
                defaultValue={doc.Brate}
                
                id="employeebehrate"
                type="text"
              />
            </div>
            <div className="m-5">
              <label className="mr-12 text-white" htmlFor="employeeStatus">
                Technical Rating
              </label>

              <input
                onChange={handleInput07}
                className="border border- black rounded-md "
                placeholder="O | A | B | C | D "
                autoComplete="off"
                name="employeetechrate"
                defaultValue={doc.Trate}
                
                id="employeetechrate"
                type="text"
              />
            </div>
            <div className="m-5">
              <label className="mr-12 text-white" htmlFor="employeeStatus">
                Leadership Rating
              </label>

              <input
                onChange={handleInput08}
                className="border border- black rounded-md "
                placeholder="O | A | B | C | D "
                autoComplete="off"
                name="employeeleadrate"
                defaultValue={doc.Lrate}
                
                id="employeeleadrate"
                type="text"
              />
            </div>
            <div className="m-5">
              <label className="mr-12 text-white" htmlFor="employeeStatus">
                Role
              </label>

              <input
                onChange={handleInput03}
                className="border border- black rounded-md "
                placeholder="Role of employee "
                autoComplete="off"
                name="employeerole"
                defaultValue={doc.Role}
                
                id="employeerole"
                type="text"
              />
            </div>
            <div className="flex justify center my-5">
              <button
                type="submit"
                className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
              </button>
            </div>
          </form>
        ))}
      </div>
      <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] "></div>
    </div>
  );
}
