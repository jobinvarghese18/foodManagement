const initialState = []

const pgReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'POST_PG':{
            return state.concat(action.payload)
        }
        case 'RESET_PG':{
            return state.concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
export default pgReducer