import axios from '../config/axios'

//----------Approve user --
export const postApproveUser = (data)=>{
    return{type:'PUT_USER_REQ',payload:data}
}
export const startApproveUser = (id,data)=>{
    return(dispatch)=>{
        axios.put(`/user/approve/${id}`,data,{
            headers:{
                "Authorization":localStorage.getItem('auth')
            }
        })
        .then((response)=>{
            console.log(response.data)
            dispatch(postApproveUser(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//--------Delete Request by User ID --
export const deleteUserReq = (data)=>{
    return{type:'DELETE_USER_REQ',payload:data}
}
export const startDeleteUserReq = (id)=>{
    return(dispatch)=>{
        axios.delete(`/user/approve/${id}`,{
            headers:{
                "Authorization":localStorage.getItem('auth')
            }
        })
        .then((response)=>{
            console.log(response.data)
            dispatch(deleteUserReq(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}