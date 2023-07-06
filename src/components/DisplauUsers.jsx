import { useDispatch, useSelector } from "react-redux";
import {removeUser} from '../store/slices/UserSlices'
const DisplayUsers = ()=>{
    const data = useSelector((state)=>state.users)
    const disaptch = useDispatch()
    // console.log(data)
    
    return(
        <>
         {
            data.map((currEle,id)=>{
                return(
                    <div className="add-user" key={id}>
                   <li>{currEle}</li>
                   <button onClick={()=>disaptch(removeUser(currEle))} >remove</button>
                    </div>
                )
            })
        }
        </>
    )
}
export default DisplayUsers;