
import {Link} from "react-router-dom"


export default function Nav(){
    return(
        <nav class="navbar bg-info">
            <Link to="/" class="navbar-brand"> MERNApplication </Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link"> Create Student </Link>
                <Link to="/student-list" class="nav-link"> Student List </Link>
            </div>
        </nav>
    )
}
