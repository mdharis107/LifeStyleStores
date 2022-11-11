import * as types from "./actionType";

const initState = {
    data:{}
}

export const reducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.SINGLE_PRODUCT:
            return {...state,data:payload};
        default:
            return {...state,data:{}};
    }
}