import DeleteUsers from "./DeleteUsers";
import { fakeUserData } from "../api";
import { useDispatch } from 'react-redux';
import { addUser } from "../store/slices/UserSlices";
import DisplayUsers from "./DisplauUsers";

const UserDetails = () => {
    const disaptch = useDispatch();

    const addNewUser = (name) => {
        disaptch(addUser(name))
    }
    return (
        <>
            <h2>list of users details </h2>
            <button onClick={() => addNewUser(fakeUserData())} >Add New Users</button>
            <ul>
                <DisplayUsers />
            </ul>
            <DeleteUsers />
        </>
    )
}

export default UserDetails