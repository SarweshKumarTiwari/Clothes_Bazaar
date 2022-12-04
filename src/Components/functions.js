import axios from 'axios';
import jsCookie from 'js-cookie';

export async function authorise(url,authToken="AuthToken") {
    try {    
        if (!jsCookie.get(authToken)) {
            return {error:"not found"};
        }
        const auth =await axios.get(`http://localhost:4000/${url}`, {
            headers: {
                "Authorization": `Bearer ${jsCookie.get(authToken)}`
            }
        });
        if (!auth.data.error) {
            return {success:auth.data};
        }
        else{
            return {error:auth.data.error};
        }
    } catch (error) {
        return {error:"Server not connected"};
    }
}


export async function authenticate(url,data,authToken="AuthToken") {
    const auth = await axios.post(url, data);
    if (!auth.data.error) {
        jsCookie.set(authToken,auth.data.token)
        return true;
    }
    else {
        return {error:auth.data.error};
    }
}


export async function update(url,data,authToken="AuthToken"){
    if (!jsCookie.get(authToken)) {
        return {error:"not found"};
    }
    const auth=await axios.put(url,data,{
        headers:{
            'Authorization':`Bearer ${jsCookie.get(authToken)}`
        }
    });
    if (!auth.data.error) {
        return {success:auth.data.success};
    }else{
        return {error:auth.data.error};
    }
}

export async function insert(url,data,authToken="AuthToken"){
    if (!jsCookie.get(authToken)) {
        return {error:"not found"};
    }
    const auth=await axios.post(`http://localhost:4000/${url}`,data,{
        headers:{
            'Authorization':`Bearer ${jsCookie.get(authToken)}`
        }
    });
    if (!auth.data.error) {
        return {success:auth.data};
    }else{
        return {error:auth.data.error};
    }
}

export async function deleteitem(url,id,authToken="AuthToken"){
    if (!jsCookie.get(authToken)) {
        return {error:"not found"};
    }
    const auth=await axios.delete(`http://localhost:4000/${url}`,{
        headers:{
            'Authorization':`Bearer ${jsCookie.get(authToken)}`
        },
        data:id,
    });
    if (!auth.data.error) {
        return {success:auth.data};
    }else{
        return {error:auth.data.error};
    }
}

