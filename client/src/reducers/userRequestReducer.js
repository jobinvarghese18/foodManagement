const initialState = []

const userRequestReducer = (state = initialState, action)=>{
    switch(action.type){
      case 'POST_USER_REQ':{
                return [...action.payload]
                }
      default:{
                return [].concat(state)
          }
    }
}
export default userRequestReducer