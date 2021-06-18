import moment from 'moment';

export function formatTime(time){
    return moment().format('LLL');
} 

export async function handleResults(results){
    const response = await results.json();
    console.log(response)
    if(!results.ok){
        throw new Error(response.message)
    }
    return response;
}
export function convertToBase64(usercreds){
    return Buffer.from(`${usercreds.username}:${usercreds.password}`).toString('base64');
}