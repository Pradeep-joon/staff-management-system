import React from "react";
import Typed from 'react-typed'
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
// import { Firestore } from "firebase/firestore";
// import { collection, getDocs, where, query } from "firebase/firestore";
// import { doc, getDoc } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

let searchvalue;
export default function Updateemployeedetail (){
    
    const location = useLocation();
        console.log(location.state.cuser_id);
        const currentuserid = location.state.cuser_id;
        // const currentusermail = location.state.cusermail;
        // const [info , setInfo] = useState([]);
        // const tests = (e) =>{
        //     console.log("Hurray");
        // }


        const fetch = async()=>
         {
            const q = query(collection(db, "Users"), where("CompanyId", "==", currentuserid), where("Status", "in", ["ongoing", "Notice"]) ,where("Aadhar_No", "==", searchvalue));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                // var data = doc.data();
                // setInfo(arr => [...arr , data]);
                // console.log(doc.data.name);
            });


            // const querySnapshot = await getDocs(collection(db, "Users"));
            // querySnapshot.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());

            // });
        } 


    // const [employeeDetail , setemployeeDetail] = useState({
    //     employeeName:"",
    //     employeeEmail:"",
    //     employeeContact:"",  
    //     employeeid:"", 
    //     employeeBranch:"",
    // })
    // const[employeeNameError,setemployeeNameError] = useState("");
    // const[employeeEmailError,setemployeeEmailError] = useState("");
    // const[employeeContactError,setemployeeContactError] = useState("");
    // const[employeeidError,setemployeeidError] = useState("");
    // const[employeeBranchError,setemployeeBranchError] = useState("");
        

    // const validate = () =>{
    //     const errors = {}
    //     if(employeeDetail.employeeName ==="")
    //     errors.employeeName= "Employee Name is required";

    //     if(employeeDetail.employeeEmail ==="")
    //     errors.employeeEmail= "Email  is required";

    //     if(employeeDetail.employeeContact ==="")
    //     errors.employeeContact= "Contact Detail  is required";

    //     if(employeeDetail.employeeid ==="")
    //     errors.employeeid= "Aadhar No. is required";

    //     if(employeeDetail.employeeBranch ==="")
    //     errors.employeeBranch= "Employee Branch is required";

    //     return Object.keys(errors).length === 0 ? null : errors;
    // }
    // const [records, setRecords] = useState([]);
    // const handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setemployeeDetail({...employeeDetail, [name] : value});
    // }

   
     
     
    // const handlesubmit1 = (e) =>{
    //     e.preventDefault();
    //     const newRecord = {...employeeDetail, id : new Date().getTime().toString()}
    //     console.log(records);
    //     setRecords([...records, newRecord]);
    //     console.log(records);
       
    //    setemployeeDetail({employeeName:"",employeeEmail:"",employeeContact:"",employeeid:"",employeeBranch:""});

    //     const errors = validate();

    //     if(errors){
    //         setemployeeNameError(errors.employeeName);
    //         setemployeeEmailError(errors.employeeEmail);
    //         setemployeeContactError(errors.employeeContact); 
    //         setemployeeidError(errors.employeeid); 
    //         setemployeeBranchError(errors.employeeBranch);
    //     }
    //     else{
    //         setemployeeNameError("");
    //         setemployeeEmailError("");
    //         setemployeeContactError("");
    //         setemployeeidError("");
    //         setemployeeBranchError("");
    //     }
    // }
    const handleQueryChange = (e)=>{
        e.preventDefault();
        searchvalue = e.target.value;

    }
    



    return(
       <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
        <div className=" p-3 text-[30px] md:text-[50px] text-white"> 
             <Typed 
                 strings={['Update Employee Details ']}
                          typeSpeed={100}
                          loop={true}
                          backSpeed ={50}
                        />
                        
        </div>
        {/* <div className=" p-3 text-[30px] md:text-[50px] text-white">
        <button onClick={fetch}>lalalala</button>
        </div>
        <div className=" p-3 text-[30px] md:text-[50px] text-white">
          {
            info.map((data) => (
            // <Frame email={data.Email}
            // name={data.name}
            // status={data.Status}/>
            <button onClick={tests}>{data.name}</button>
            
            ))
        }
        </div> */}
       
  <div class="absolute right-10 top-10 h-16 ...">
  {/* <form > */}
        <div class="content-end">
            <input
                type="text"
                id="header-search black"
                border = "border -black rounded-md"
                placeholder="Search Employees"
                name="s"
                value = {searchvalue}
                onChange={handleQueryChange}
            />
            <button onClick={fetch} class="inline-flex items-center py-0.5 px-4 ml-3 mt-10 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Search</button>
        </div>
    {/* </form> */}
  </div>

        
         
        
        {/* <form onSubmit={handlesubmit1}>
           
            <div className = "m-4">
                <label className="mr-12 text-white" htmlFor="employeeName" > Name</label>
                <input onChange={handleInput} className ="border border- black rounded-md" placeholder="Enter the Employeename " autoComplete="off" name="employeeName" value = {employeeDetail.employeeName} id ="employeeName" type="text"/>
                <div className="text-red-500 text-sm">{employeeNameError}</div>
            </div>
            <div className = "m-4">
                <label className = "mr-11 text-white" htmlFor="employeeEmail">E-mail</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Enter the E-mail" autoComplete="off" name="employeeEmail" value = {employeeDetail.employeeEmail} id ="employeeEmail" type="text"/>
                <div className="text-red-500 text-sm">{employeeEmailError}</div>
            </div>
            <div className = "m-4">
                <label className = "mr-8 text-white"htmlFor="employeeContact">Contact</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Enter the Contact No." autoComplete="off" name="employeeContact" value = {employeeDetail.employeeContact} id ="employeeContact" type="text"/>
                <div className="text-red-500 text-sm">{employeeContactError}</div>
            </div>
            <div className = "m-5">
                <label className = "mr-12 text-white"htmlFor="employeeField">Aadhar</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Aadhar" autoComplete="off" name = "employeeid"value = {employeeDetail.employeeid} id ="employeeid" type="text"/>
                <div className="text-red-500 text-sm">{employeeidError}</div>
            </div>
            <div className = "m-5">
                <label className = "mr-12 text-white"htmlFor="employeeBranch">Field</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Enter the Branch " autoComplete="off" name="employeeField" value = {employeeDetail.employeeBranch} id ="employeeBranch" type="text"/>
                <div className="text-red-500 text-sm">{employeeBranchError}</div>
            </div>
            <div className="flex justify center my-5">
                <button type="submit" className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Update
                </button>
            </div>
        </form> */}
        <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
          

        </div>
       </div>
    )
}
// const Frame = ({email , name , status}) => {
//     console.log(email + " " + name + " " + status);
//     return (
//         <center>
//             <div className="div">
                 
// <p>NAME : {name}</p>
  
                 
// <p>Status : {status}</p>
 
                 
// <p>Email : {email}</p>
  
//             </div>
//         </center>
//     );
// }