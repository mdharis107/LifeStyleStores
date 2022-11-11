import * as types from "./actionType";

export const updateSingleProduct = (payload)=>{
    return {
        type:types.SINGLE_PRODUCT,
        payload
    }
}