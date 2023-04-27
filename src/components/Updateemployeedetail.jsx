import React,{useState} from "react";
import Typed from 'react-typed'

export default function Updateemployeedetail (){
    const [employeeDetail , setemployeeDetail] = useState({
        employeeName:"",
        employeeEmail:"",
        employeeContact:"",  
        employeeField:"", 
        employeeBranch:"",
    })
    const[employeeNameError,setemployeeNameError] = useState("");
    const[employeeEmailError,setemployeeEmailError] = useState("");
    const[employeeContactError,setemployeeContactError] = useState("");
    const[employeeFieldError,setemployeeFieldError] = useState("");
    const[employeeBranchError,setemployeeBranchError] = useState("");
        

    const validate = () =>{
        const errors = {}
        if(employeeDetail.employeeName ==="")
        errors.employeeName= "Employee Name is required";

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
    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setemployeeDetail({...employeeDetail, [name] : value});
    }
     
    const handlesubmit1 = (e) =>{
        e.preventDefault();
        const newRecord = {...employeeDetail, id : new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
       
       setemployeeDetail({employeeName:"",employeeEmail:"",employeeContact:"",employeeField:"",employeeBranch:""});

        const errors = validate();

        if(errors){
            setemployeeNameError(errors.employeeName);
            setemployeeEmailError(errors.employeeEmail);
            setemployeeContactError(errors.employeeContact); 
            setemployeeFieldError(errors.employeeField); 
            setemployeeBranchError(errors.employeeBranch);
        }
        else{
            setemployeeNameError("");
            setemployeeEmailError("");
            setemployeeContactError("");
            setemployeeFieldError("");
            setemployeeBranchError("");
        }
    }


    return(
       <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
         <div className=" p-5 text-[30px] md:text-[50px] text-white">
             
         <Typed 
             strings={['Update Employee Details ']}
                      typeSpeed={100}
                      loop={true}
                      backSpeed ={50}
                    />
          </div>
        
        <form onSubmit={handlesubmit1}>
           
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
                <label className = "mr-12 text-white"htmlFor="employeeField">Type</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Field of Employee " autoComplete="off" name = "employeeField"value = {employeeDetail.employeeField} id ="employeeField" type="text"/>
                <div className="text-red-500 text-sm">{employeeFieldError}</div>
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
        </form>
       </div>
    )
}