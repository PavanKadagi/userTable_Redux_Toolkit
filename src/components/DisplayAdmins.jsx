import { useDispatch, useSelector } from "react-redux";
import { removeAdmin } from "../store/slices/AdminSlice";


const DisplayAdmin = ()=>{
    const data = useSelector((state)=>state.admin)
    const disaptch = useDispatch()
    // console.log(data)
    
    return(
        <>
         {
            data.map((currEle,id)=>{
                return(
                    <div className="add-user" key={id}>
                   <li>{currEle}</li>
                   <button onClick={()=>disaptch(removeAdmin(currEle))} >remove</button>
                    </div>
                )
            })
        }
        </>
    )
}
export default DisplayAdmin;