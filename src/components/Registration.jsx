import React,{useState} from "react";
import Typed from 'react-typed'

export default function Registration (){
    const [companyRegistration , setCompanyRegistration] = useState({
        organizationName:"",
        organizationEmail:"",
        organizationContact:"", 
        organizationType:"", 
        organizationField:"", 
        organizationBranch:"",
        organizationEmployee :"",
        //organizationPassword:""
    })
    /*
    const [organizationName, setorganizationName] = useState("");
    const [organizationPassword, setorganizationPassword] = useState("");
    const [organizationEmail,setorganizationEmail] = useState("");
    const [organizationContact,setorganizationContact] = useState("");
    const [organizationType,setorganizationType] = useState("");
    const [organizationField,setorganizationField] = useState("");
    const [organizationEmployee,setorganizationEmployee] = useState("");
    const [organizationBranch, setorganizationBranch] = useState("");
*/


    const [Oragnizationerror, setorganizationerror] = useState("");
    const [Emailerror, setEmailerror] = useState("");
    const [Contacterror,setContacterror] = useState("");
    const [Typeerror, setTypeerror] = useState("");
    const [Fielderror, setFielderror] = useState("");
    //const [passerror, setpasserror] = useState("");
    const [Employeeerror, setEmployeeerror] = useState("");
    const [Brancherror, setBrancherror] = useState("");



    const validate = () =>{
        const errors = {}
        if(companyRegistration.organizationName ==="")
        errors.organizationName= "Company Name is required";

        if(companyRegistration.organizationEmail ==="")
        errors.organizationEmail= "Email  is required";

        if(companyRegistration.organizationContact ==="")
        errors.organizationContact= "Contact Detail  is required";

        if(companyRegistration.organizationType ==="")
        errors.organizationType= "Company Type is required";

        if(companyRegistration.organizationField ==="")
        errors.organizationField= "Company Field is required";

        if(companyRegistration.organizationEmployee ==="")
        errors.organizationEmployee= "Employee Strength is required";

        if(companyRegistration.organizationEmployee ==="")
        errors.organizationBranch= "Branch is required";

       // if(companyRegistration.organizationPassword ==="")
        //errors.organizationPassword= "Password is required";

        return Object.keys(errors).length === 0 ? null : errors;
    }
    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setCompanyRegistration({...companyRegistration, [name] : value});
    }
     
    const handlesubmit = (e) =>{
        e.preventDefault();
        const newRecord = {...companyRegistration, id : new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
       
       setCompanyRegistration({organizationName:"",organizationEmail:"",organizationContact:"",organizationType:"",organizationField:"",organizationBranch:"",organizationEmployee:""});

        const errors = validate();

        if(errors){
            setorganizationerror(errors.organizationName);
            setEmailerror(errors.organizationEmail);
            setContacterror(errors.organizationContact);
            setTypeerror(errors.organizationType);
            setFielderror(errors.organizationField);
            setEmployeeerror(errors.organizationEmployee);
            setBrancherror(errors.organizationBranch);
           // setpasserror(errors.organizationPassword);
        }
        else{
            setorganizationerror("");
            setEmailerror("");
            setContacterror("");
            setTypeerror("");
            setFielderror("");
            setEmployeeerror("");
            setBrancherror("");
           // setpasserror("");
        }
    }


    return(
       <div className="flex flex-col justify-center  items-center bg-black w-full py-[88px] ">
         <div className=" p-5 text-[30px] md:text-[50px] text-white">
             
         <Typed 
             strings={['Apply Your Company ',' Apply Your Organization']}
                      typeSpeed={100}
                      loop={true}
                      backSpeed ={50}
                    />
          </div>
        
        <form onSubmit={handlesubmit}>
           
            <div className = "m-4">
                <label className="mr-12 text-white" htmlFor="organizationName" > Name</label>
                <input onChange={handleInput} className ="border border- black rounded-md" placeholder="Enter the Company name " autoComplete="off" name="organizationName" value = {companyRegistration.organizationName} id ="organizationName" type="text"/>
                <div className="text-red-500 text-sm">{Oragnizationerror}</div>
            </div>
            <div className = "m-4">
                <label className = "mr-11 text-white" htmlFor="organizationEmail">E-mail</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Enter the E-mail" autoComplete="off" name="organizationEmail" value = {companyRegistration.organizationEmail} id ="organizationEmail" type="text"/>
                <div className="text-red-500 text-sm">{Emailerror}</div>
            </div>


            <div className = "m-4">
                <label className = "mr-8 text-white"htmlFor="organizationContact">Contact</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Enter the Contact No." autoComplete="off" name="organizationContact" value = {companyRegistration.organizationContact} id ="organizationContact" type="text"/>
                <div className="text-red-500 text-sm">{Contacterror}</div>
            </div>
            <div className = "m-5">
                <label className = "mr-12 text-white"htmlFor="organizationType">Type</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Type of Company " autoComplete="off" name = "organizationType"value = {companyRegistration.organizationType} id ="organizationType" type="text"/>
                <div className="text-red-500 text-sm">{Typeerror}</div>
            </div>
            <div className = "m-5">
                <label className = "mr-12 text-white"htmlFor="organizationField">Field</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Enter the Field " autoComplete="off" name="organizationField" value = {companyRegistration.organizationField} id ="organizationField" type="text"/>
                <div className="text-red-500 text-sm">{Fielderror}</div>
            </div>
            <div className = "m-4">
                <label className = "mr-4 text-white"htmlFor="organizationEmployee">Employee</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Number of Employees " autoComplete="off" name="organizationEmployee" value = {companyRegistration.organizationEmployee} id ="organizationEmployee" type="text"/>
                <div className="text-red-500 text-sm">{Employeeerror}</div>
            </div>
            <div className = "m-4">
                <label className = "mr-9 text-white"htmlFor="organizationBranch">Branch</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Name of Branches " autoComplete="off" name="organizationBranch" value = {companyRegistration.organizationBranch} id ="organizationBranch" type="text"/>
                <div className="text-red-500 text-sm">{Brancherror}</div>
            </div>
          {/* <div className = "m-4">
                <label className = "mr-4 text-white"htmlFor="organizationPassword"> Password</label>
                <input onChange={handleInput} className ="border border- black rounded-md " placeholder="Enter the Password" autoComplete="off" name="organizationPassword" value = {companyRegistration.organizationPassword} id ="organizationPassword" type="password"/>
                <div className="text-red-500 text-sm">{passerror}</div>
            </div> */}
            
            <div className="flex justify center my-5">
                <button type="submit" className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                </button>
            </div>
        </form>
       </div>
    )
}