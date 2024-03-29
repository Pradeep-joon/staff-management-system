import React,{useState} from "react";
import Typed from 'react-typed'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import {useLocation} from 'react-router-dom';



export default function Addemployeedetail (){

        const location = useLocation();
            console.log(location.state.cuser_id);
            const currentuserid = location.state.cuser_id;
            const currentusermail = location.state.cusermail;
    
    const [employeeDetail , setemployeeDetail] = useState({
        employeeName:"",
        employeeid:"",
        employeeEmail:"",
        employeeContact:"",  
        employeeField:"", 
        employeeBranch:"",
    })
    const[employeeNameError,setemployeeNameError] = useState("");
    const[employeeidError,setemployeeidError] = useState("");
    const[employeeEmailError,setemployeeEmailError] = useState("");
    const[employeeContactError,setemployeeContactError] = useState("");
    const[employeeFieldError,setemployeeFieldError] = useState("");
    const[employeeBranchError,setemployeeBranchError] = useState("");
        

    const validate = () =>{
        const errors = {}
        if(employeeDetail.employeeName ==="")
        errors.employeeName= "Employee Name is required";

        if(employeeDetail.employeeid ==="")
        errors.employeeid= "Employee id is required";

        if(employeeDetail.employeeEmail ==="")
        errors.employeeEmail= "Email  is required";

        if(employeeDetail.employeeContact ==="")
        errors.employeeContact= "Contact Detail  is required";

        if(employeeDetail.employeeField ==="")
        errors.employeeField= "Employee Field is required";

        if(employeeDetail.employeeBranch ==="")
        errors.employeeBranch= "Employee Branch is required";

        return Object.keys(errors).length === 0 ? null : errors;
    }
    // const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setemployeeDetail({...employeeDetail, [name] : value});
        
    }

    
     
    const handlesubmit = (e) => {
        e.preventDefault();
        
        
        
        // const newRecord = {...employeeDetail, id : new Date().getTime().toString()}
        // setRecords([...records, newRecord]);
        
        // const newRecord = {...employeeDetail, id : new Date().getTime().toString()}
        // console.log(records);
        // setRecords([...records, newRecord]);
        // console.log(records);
       
       setemployeeDetail({employeeName:"",employeeid:"", employeeEmail:"",employeeContact:"",employeeField:"",employeeBranch:""});

        const errors = validate();

        if(errors){
            setemployeeNameError(errors.employeeName);
            setemployeeidError(errors.employeeid);
            setemployeeEmailError(errors.employeeEmail);
            setemployeeContactError(errors.employeeContact); 
            setemployeeFieldError(errors.employeeField); 
            setemployeeBranchError(errors.employeeBranch);
        }
        else {
            setemployeeNameError("");
            setemployeeidError("");
            setemployeeEmailError("");
            setemployeeContactError("");
            setemployeeFieldError("");
            setemployeeBranchError("");
            

            const docRef =  addDoc(collection(db, "Users"), {
                name: employeeDetail.employeeName,
                Aadhar_No: employeeDetail.employeeid,
                Email: employeeDetail.employeeEmail,
                Contact: employeeDetail.employeeContact,
                Date_of_joining: employeeDetail.employeeField,
                Role: employeeDetail.employeeBranch,
                CompanyId: currentuserid,
                Companymail: currentusermail,
                Status: "Ongoing",
                PWI: "",
                Brate: "",
                Trate: "",
                Lrate: "",

              });
              console.log("Document written with ID: ", docRef.id);
              alert(`${employeeDetail.employeeName} has been added Successfully!`);
            //   console.log(currentuserid);
        }
        
    }

      


    return(
       <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
         <div className=" p-5 text-[30px] md:text-[50px] text-white">
             
         <Typed 
             strings={['Employee Registration ',' New Employee!']}
                      typeSpeed={100}
                      loop={true}
                      backSpeed ={50}
                    />
          </div>
        
         <form onSubmit={handlesubmit}>
           
            <div className = "m-4">
                <label className="mr-11 text-white" htmlFor="employeeName" > Name</label>
                <input onChange={handleInput} className ="border border- black rounded-md" placeholder=" Employee name " autoComplete="off" name="employeeName" value = {employeeDetail.employeeName} id ="employeeName" type="text"/>
                <div className="text-red-500 text-sm">{employeeNameError}</div>
            </div>
            <div className = "m-4">
                <label className="mr-8 text-white" htmlFor="employeeid" > Aadhar </label>
                <input onChange={handleInput} className ="border border- black rounded-md" placeholder="Aadhar No. " autoComplete="off" name="employeeid" value = {employeeDetail.employeeid} id ="employeeid" type="text"/>
                <div className="text-red-500 text-sm">{employeeidError}</div>
            </div>
            <div className = "m-4">
                <label className = "mr-11 text-white align-content:space-evenly" htmlFor="employeeEmail">E-mail</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder=" E-mail" autoComplete="off" name="employeeEmail" value = {employeeDetail.employeeEmail} id ="employeeEmail" type="text"/>
                <div className="text-red-500 text-sm">{employeeEmailError}</div>
            </div>
            <div className = "m-4">
               <label className = "mr-8 text-white"htmlFor="employeeContact">Contact</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder=" Contact No." autoComplete="off" name="employeeContact" value = {employeeDetail.employeeContact} id ="employeeContact" type="text"/>
                <div className="text-red-500 text-sm">{employeeContactError}</div>
            </div>
            <div className = "m-4 ">
                <label className = "mr-10 text-white"htmlFor="employeeField">D.O.J.</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Joining date  " autoComplete="off" name = "employeeField"value = {employeeDetail.employeeField} id ="employeeField" type="text"/>
                <div className="text-red-500 text-sm">{employeeFieldError}</div>
            </div>
            <div className = "m-4">
                <label className = "mr-12 text-white"htmlFor="employeeBranch">Role </label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Role of Employee " autoComplete="off" name="employeeBranch" value = {employeeDetail.employeeBranch} id ="employeeBranch" type="text"/>
                <div className="text-red-500 text-sm">{employeeBranchError}</div>
            </div>
            <div className="flex justify center my-7">
                <button type="submit" className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Add 
                </button>
            </div>
        </form>
       </div>
    )
    }