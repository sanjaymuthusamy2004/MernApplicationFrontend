import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useEffect, useState } from "react";
import Axios from "axios";




export default function EditStudent(){
    const {id}=useParams();
    const [initialValue,setInitialValue] = useState({name:"",email:"",regNo:""})
    const [newData,setNewData]=useState([]);
   
    useEffect(()=>{
        Axios.get("http://localhost:4000/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email,regNo}=res.data;
                setInitialValue({name,email,regNo});
            }      
            else
                Promise.reject()
        })
        .catch((err)=>{
            alert(err);
        })
    },[id])  


    const getState=(childData)=>{
        setNewData(childData);
    }


    const handleSubmit =()=>{
        const data={name:newData[0],email:newData[1],regNo:newData[2]}
        Axios.put("http://localhost:4000/studentRoute/update-student/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated")
            else
                Promise.reject()
        })
        .catch((err)=> alert(err));
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                         nameValue={initialValue.name}
                         emailValue={initialValue.email}
                         regNoValue={initialValue.regNo}
             >
                Update student
             </StudentForm>
        </form>
    )
}
