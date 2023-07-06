import { useDispatch } from "react-redux"
// import { clearUsers } from "../store/slices/UserSlices"
import { clearAllUsers } from "../store/actions";

const DeleteUsers = ()=>{
    const dispatch = useDispatch();
    return (
        <>
        <button onClick={()=>dispatch(clearAllUsers())} >Clear Users</button>
        </>
    )
}

export default DeleteUsers