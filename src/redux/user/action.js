export const setUserCredentails=(usercreds)=>{
    return {
        type:'SET_USER_CREDENTIALS',
        payload: usercreds
    }
}
export const resetUserCredentials=()=>{
    return {
        type:'RESET_USER_CREDENTIALS',
    }
}