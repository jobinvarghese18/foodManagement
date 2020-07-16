const initialState = []

const userRequestReducer = (state = initialState, action)=>{
    switch(action.type){
      case 'POST_USER_REQ':{
            return state.concat(action.payload)
      }
      case 'PUT_USER_REQ':{
            return state.map((ele,i)=>{
                if(ele._id === action.payload._id){
                    return Object.assign({},ele,action.payload)
                }
                else{
                    return Object.assign({},ele)
                }
            })
      }
      case 'DELETE_USER_REQ':{
          return [].concat(state.filter((ele)=>ele.userId !== action.payload.userId))
      }
      default:{
                return [].concat(state)
      }
    }
}
export default userRequestReducer