import Axios from "axios";
import {Link} from "react-router-dom"
export default function StudentListRow(props){
    const {_id,name,email,regNo} =props.obj;


    const handleClick =()=>{
        Axios.delete("https://mernapplicationbackend-7.onrender.com/studentRoute/delete-student/" +_id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record is deleted");
                window.location.reload();
            }  
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    }


    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{regNo}</td>
            <td class="d-flex justify-content-center">
                <button class="btn btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-student/"+_id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
