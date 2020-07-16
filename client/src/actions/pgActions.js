import axios from '../config/axios'

//---------- PG Register -------

export const startRegisterPg = (data,redirect)=>{
    return(dispatch)=>{
        axios.post('/pg/register',data)
        .then((response)=>{
            if(response.data.hasOwnProperty('code')){
                alert('Name and e-mail should be unique')
            }
            else  if( response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                console.log(response.data)
                redirect()
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//--------------PG login -----
export const loginPg = (data)=>{
    return{type:'POST_PG',payload:data}
}
export const startLoginPg = (data,redirect)=>{
    return(dispatch)=>{
        axios.post('/pg/login',data)
        .then((response)=>{
            if(response.data.hasOwnProperty('erros')){
                alert(response.data.message)
            }
            else if(response.data.hasOwnProperty('token')){
                console.log(response.data)
                const auth = response.data.token
                localStorage.setItem('auth',auth)
                axios.get('/pg/account',{
                    headers:{
                        "Authorization":auth
                    }
                })
                .then((response)=>{
                    console.log(response.data)
                    dispatch(loginPg(response.data))
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

//---------------- Get all PGS ---------
export const postPGs = (data)=>{
    return {type:'POST_PGS',payload:data}
}
export const startGetPgs = ()=>{
    return(dispatch)=>{
        const auth = localStorage.getItem('auth')
        console.log(auth)
        axios.get('/pg/pgs',{
            headers:{
                "Authorization":auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            dispatch(postPGs(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//--------------Get Requests -----
export const postRequest  = (data)=>{
    return{type:'POST_USER_REQ',payload:data}
}
export const startGetRequests = ()=>{
    return(dispatch)=>{
        axios.get('/user/approve',{
            headers:{
                "Authorization":localStorage.getItem('auth')
            }
        })
        .then((response)=>{
            console.log(response.data)
            dispatch(postRequest(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//---------------log out---
export const resetPg = (data)=>{
    return {type:'RESET_PG',payload:data}
}
export const startLogoutPG = ()=>{
    return (dispatch)=>{
        localStorage.removeItem('auth')
        dispatch(resetPg({}))
        window.location.href='/pg/login'
    }
}