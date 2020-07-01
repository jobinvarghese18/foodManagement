const initialState = []

const residentMessReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'SET_RES_MESS':{
            return state.concat(action.payload)
        }
        default:{
            return [...state]
        }
    }
}

export default residentMessReducer