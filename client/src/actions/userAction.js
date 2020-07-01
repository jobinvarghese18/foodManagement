import axios from '../config/axios'

//------------- User Login ----------
export const loginUser = (data)=>{
    return {type:'POST_USER',payload:data}
}
export const startLoginUser = (formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/user/login',formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('token')){
                const auth = response.data.token
            localStorage.setItem('auth',auth)
            axios.get('/user/account',{
                headers:{
                    "Authorization":auth
                }
            })
            .then((response)=>{
                console.log(response.data)
                dispatch(loginUser(response.data))
                redirect()
            })
            .catch((err)=>{
                console.log(err)
            })
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//------------- User Register -----------
export const startRegister = (formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/user/register',formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//------------Logout user -------
export const resetUser = (data)=>{
    return {type:'RESET_USER',payload:data}
}
export const startLogout = ()=>{
    return (dispatch)=>{
        localStorage.removeItem('auth')
        dispatch(resetUser({}))
        window.location.href='/user/login'
    }
}

//-------Posting Mess details----
export const postMessDetails = (data)=>{
    return{type:'SET_RES_MESS',payload:data}
}
export const startPostMessDetails = (data)=>{
    return(dispatch)=>{
        axios.post('/user/residentMess',data,{
            headers:{
                'Authorization':localStorage.getItem('auth')
            }
        })
        .then((response)=>{
            console.log(response.data)
            dispatch(postMessDetails(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}