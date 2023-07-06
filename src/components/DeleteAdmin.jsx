import { useDispatch } from "react-redux"
// import { clearUsers } from "../store/slices/UserSlices"
import { clearAllUsers } from "../store/actions";

const DeleteAdmin = ()=>{
    const dispatch = useDispatch();
    return (
        <>
        <button onClick={()=>dispatch(clearAllUsers())} >Clear Users</button>
        </>
    )
}

export default DeleteAdmin