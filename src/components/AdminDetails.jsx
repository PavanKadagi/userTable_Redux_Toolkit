import { fakeUserData } from "../api";
import { useDispatch } from 'react-redux';
import { addAdmin } from "../store/slices/AdminSlice";
import DisplayAdmin from "./DisplayAdmins";
import DeleteAdmin from "./DeleteAdmin";

const AdminDetails = () => {
    const disaptch = useDispatch();

    const addNewAdmin = (name) => {
        // console.log("kkk")
        disaptch(addAdmin(name))
    }
    return (
        <>
            <h2>list of Admin details </h2>
            <button onClick={() => addNewAdmin(fakeUserData())} >Add New Users</button>
            <ul>
                <DisplayAdmin />
            </ul>
            <DeleteAdmin />
        </>
    )
}

export default AdminDetails