import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios"


export default function CreateStudent(){
    const[arr,setArr]=useState([])


    const getState =(childData)=>{
        setArr(childData);
    }


    const handleSubmit = (event)=>{
        	const data ={name:arr[0],email:arr[1],regNo:arr[2]};    
     Axios.post("http://localhost:4000/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("new record added")
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
	   event.target.reset();
    }


    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} />
        </form>
    )
}
