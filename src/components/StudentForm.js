import { useEffect, useState } from "react"


export default function StudentForm(props){
    const[name,setName] = useState(props.nameValue)
    const[email,setEmail] = useState(props.emailValue)
    const[regNo,setRegNo] = useState(props.regNoValue)


    useEffect(()=>{
        setName(props.nameValue)
        setEmail(props.emailValue)
        setRegNo(props.regNoValue)
    },[props.nameValue,props.emailValue,props.regNoValue])


    const arr=[name,email,regNo];


    const handleClick =()=>{
        props.getState(arr);
    }


    return(
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter Name" />
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter Email" />
            <input defaultValue={props.regNoValue} onChange={(event)=>setRegNo(event.target.value)} class="form-control my-3" placeholder="Enter Registration Number" />
            <button onClick={handleClick} type="submit" class="btn btn-warning d-block mx-auto my-3">{props.children}</button>
        </div>
    )
}
