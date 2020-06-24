const initialState = []

const pgsReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'POST_PGS':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default pgsReducer