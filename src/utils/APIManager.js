import { handleResults } from "./Helpers";

const Server_url =  process.env.REACT_APP_SERVER_URL
const appHeader = {'Content-Type': 'application/json'};
export const getQuestions= async ()=>{
    try{
        const results = await fetch(`${Server_url}/question?sort=mostRecent`,{
            method:'GET',
            headers: appHeader
        })
        const data= await results.json();
        if(!results.ok){
            throw new Error(data);
        }
        return data;
    }   
    catch(err){
        throw new Error(err.message);
    }
}
export async function signUpUser(usercreds){
    try{
        const results = await fetch(`${Server_url}/user`,{
            method:'POST',
            headers: appHeader,
            body: JSON.stringify(usercreds)
        })
        return handleResults(results)
    }   
    catch(err){
        throw new Error(err.message);
    }
}
export async function getUserInfo(usercreds){
    try{
        console.log(`Basic ${usercreds}`);
        const results = await fetch(`${Server_url}/user/self`,{
            method:'GET',
            headers: {...appHeader,Authorization: `Basic ${usercreds}`},
        })
        return handleResults(results)
    }   
    catch(err){
        throw new Error(err.message);
    }
}
export async function submitQuestion(usercreds,questionBody){
    try{
        const results = await fetch(`${Server_url}/question`,{
            method:'POST',
            headers: {...appHeader,Authorization: `Basic ${usercreds}`},
            body:JSON.stringify(questionBody)
        })
        return handleResults(results)
    }   
    catch(err){
        throw new Error(err.message);
    }
}