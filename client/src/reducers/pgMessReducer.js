const { Switch } = require("@material-ui/core")

const initialState  = []

const pgMessReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'POST_PG_MESS':{
            return [...action.payload]
        }
        default:{
            return [].concat(state)
        }
    }
}

export default pgMessReducer