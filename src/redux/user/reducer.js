const initialState={
    username:'',
    password:''
}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_USER_CREDENTIALS':
            return {
                ...state,
                ...action.payload
            }
        case 'RESET_USER_CREDENTIALS':
            return {
                ...state,
                username:'',
                password:''
            }
        default:
            return state;
    }
}
export default userReducer;